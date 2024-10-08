import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Login() {
  return (
    <>
      <SignedOut>
        <div>
          <h1>Please Sign In</h1>
          <SignInButton />
        </div>
      </SignedOut>
      
      <SignedIn>
        <div>
          <h1>Welcome Back!</h1>
          <UserButton />
          {/* Render your main interface or dashboard here */}
          <p>Your user interface goes here.</p>
        </div>
      </SignedIn>
    </>
  );
}
