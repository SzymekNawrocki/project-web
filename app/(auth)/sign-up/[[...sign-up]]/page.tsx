import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SignUp />
    </div>
  );
}
