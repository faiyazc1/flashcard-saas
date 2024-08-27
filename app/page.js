import React from "react";
import Head from "next/head";
import { Container, AppBar, Toolbar, Typography, Button, Grid, Box } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Head>
        <title>CheatCodeCards</title>
        <meta name="description" content="Create flashcards from your text" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar 
        position="static"
        sx={{
          background: "linear-gradient(90deg, rgba(26,32,44,1) 0%, rgba(26,32,44,0.8) 100%)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            C^3
          </Typography>
          <SignedIn>
            <UserButton /> {/* This will display the user's profile icon when signed in */}
          </SignedIn>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Log In</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Box textAlign="center" my={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to <span style={{ color: '#ff4081', fontWeight: 'bold' }}>C</span>heat
            <span style={{ color: '#ff4081', fontWeight: 'bold' }}>C</span>ode 
            <span style={{ color: '#ff4081', fontWeight: 'bold' }}>C</span>ards
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            The simplest way to create, organize, and study flashcards
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            href="/get-started"
            sx={{
              boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
              '&:hover': {
                boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            Get Started
          </Button>
        </Box>

        <Grid container spacing={4} textAlign="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Quickly create flashcards with our straightforward text entry system.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Our AI enhances your learning by creating context-aware flashcards.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Access Anywhere
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Study your flashcards on any device, synced in real-time.
            </Typography>
          </Grid>
        </Grid>

        <Box mt={8} textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom>
            Pricing Plans
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box 
                p={4} 
                border="1px solid" 
                borderColor="rgba(255, 255, 255, 0.15)" 
                borderRadius={3} 
                boxShadow="0px 6px 20px rgba(0, 0, 0, 0.1)"
                sx={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s",
                  '&:hover': {
                    transform: "scale(1.03)",
                    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Typography variant="h5" gutterBottom color="primary.main">
                  Chill
                </Typography>
                <Typography variant="h6" gutterBottom color="textPrimary">
                  Free
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  Access basic features and limited storage at no cost.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  sx={{
                    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
                    '&:hover': {
                      boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  Get Chill
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box 
                p={4} 
                border="1px solid" 
                borderColor="rgba(255, 255, 255, 0.15)" 
                borderRadius={3} 
                boxShadow="0px 6px 20px rgba(0, 0, 0, 0.1)"
                sx={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s",
                  '&:hover': {
                    transform: "scale(1.03)",
                    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Typography variant="h5" gutterBottom color="primary.main">
                  Cracked
                </Typography>
                <Typography variant="h6" gutterBottom color="textPrimary">
                  $3 / month
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  Unlimited flashcards, storage, and enhanced features.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  sx={{
                    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
                    '&:hover': {
                      boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  Get Cracked
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box 
                p={4} 
                border="1px solid" 
                borderColor="rgba(255, 255, 255, 0.15)" 
                borderRadius={3} 
                boxShadow="0px 6px 20px rgba(0, 0, 0, 0.1)"
                sx={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s",
                  '&:hover': {
                    transform: "scale(1.03)",
                    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Typography variant="h5" gutterBottom color="primary.main">
                  Crazy
                </Typography>
                <Typography variant="h6" gutterBottom color="textPrimary">
                  $5 / month
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  All features unlocked, plus premium support.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  sx={{
                    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
                    '&:hover': {
                      boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  Get Crazy
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}