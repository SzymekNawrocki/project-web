import PlayerForm from "../components/ui/PlayerForm"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function GraczePage() {
  return (
    <>
        <main className="min-h-screen p-8">
          <PlayerForm />
        </main>
    </>
  );
}

