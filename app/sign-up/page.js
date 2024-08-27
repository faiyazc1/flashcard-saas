import { SignUp } from '@clerk/nextjs';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function SignUpPage() {
  return (
    <Container maxWidth="sm">
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
          <Button color="inherit" href="/sign-in">Log In</Button>
          <Button color="inherit" href="/sign-up">Sign Up</Button>
        </Toolbar>
      </AppBar>

      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <SignUp 
          routing="hash" // Ensure this is set for hash-based routing
          signInUrl="/sign-in" 
          afterSignUpUrl="/" 
        />
      </Box>
    </Container>
  );
}