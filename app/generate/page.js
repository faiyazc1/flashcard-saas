'use client'; // Mark this file as a Client Component

import { Box, Container, Paper, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, Card, CardActionArea, CardContent, CircularProgress } from "@mui/material";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { db } from '../../firebase';
import { doc, collection, writeBatch, getDoc } from 'firebase/firestore';
import { useAuth } from '@clerk/nextjs'; // Correctly imported useAuth

export default function Generate() {
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState({});
    const [text, setText] = useState('');    
    const [name, setName] = useState('');    
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth(); // Get user directly from Clerk
    const router = useRouter();

    // Log the user object to see what's returned
    console.log("User object:", user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        })
        .then((res) => res.json())
        .then((data) => {
            setFlashcards(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error:', error);
            setLoading(false);
        });
    };

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const saveFlashcards = async () => {
        console.log("User object:", user);
    
        if (!user || !user.id) {
            alert('User not signed in. Please sign in to save your flashcards.');
            return;
        }
    
        const batch = writeBatch(db);
        const userDocRef = doc(collection(db, 'users'), user.id);
        const docSnap = await getDoc(userDocRef);
    
        if (docSnap.exists()) {
            const collections = docSnap.data().flashcards || [];
            if (collections.find((f) => f.name === name)) {
                alert('Name already exists');
                return;
            } else {
                collections.push({ name });
                batch.set(userDocRef, { flashcards: collections });
            }
    
            const colRef = collection(userDocRef, name);
            flashcards.forEach((flashcard) => {
                const cardDocRef = doc(colRef);
                batch.set(cardDocRef, flashcard);
            });
    
            await batch.commit();
            handleClose();
            router.push('/flashcards');
        } else {
            // Handle the case where the user's document does not exist
            console.error("User document does not exist.");
        }
    };

    return (
        <Container maxWidth="md">
            <Box 
                sx={{
                    mt: 4,
                    mb: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Generate Flashcards
                </Typography>
                <Paper sx={{ p: 4, mb: 4, width: '100%' }}>
                    <TextField
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        label="Enter Text"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </Paper>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSubmit}
                    fullWidth
                    sx={{ mb: 4 }}
                >
                    Submit
                </Button>

                {loading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
                        <CircularProgress />
                    </Box>
                )}

                {!loading && flashcards.length > 0 && (
                    <Box sx={{ mt: 4, width: '100%' }}>
                        <Typography variant="h5" textAlign="center">Flashcards Preview</Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {flashcards.map((flashcard, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Card sx={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                        <CardActionArea
                                            sx={{ height: '100%', width: '100%' }}
                                            onClick={() => handleCardClick(index)}
                                        >
                                            <CardContent sx={{ height: '100%', width: '100%', padding: 0 }}>
                                                <Box sx={{
                                                    perspective: '1000px',
                                                    width: '100%',
                                                    height: '100%',
                                                    '& > div': {
                                                        transition: 'transform 0.6s',
                                                        transformStyle: 'preserve-3d',
                                                        position: 'relative',
                                                        width: '100%',
                                                        height: '100%',
                                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                                        borderRadius: '10px',
                                                        transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                                    },
                                                    '& > div > div': {
                                                        position: 'absolute',
                                                        width: '100%',
                                                        height: '100%',
                                                        backfaceVisibility: 'hidden',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        padding: 2,
                                                        boxSizing: 'border-box',
                                                    },
                                                    '& > div > div:nth-of-type(2)': {
                                                        transform: 'rotateY(180deg)',
                                                    },
                                                }}>
                                                    <div>
                                                        <div>
                                                            <Typography variant="body1" component="div">
                                                                {flashcard.front}
                                                            </Typography>
                                                        </div>
                                                        <div>
                                                            <Typography variant="body1" component="div">
                                                                {flashcard.back}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" color="secondary" onClick={handleOpen}>
                                Save
                            </Button>
                        </Box>
                    </Box>
                )}

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Save Flashcards</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your flashcards collection.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Collection Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={saveFlashcards} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Container>
    );
}