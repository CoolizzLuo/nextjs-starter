import Button from '@/components/ui/Button';
import GoogleButton from '@/components/GoogleButton';
import ThemeToggle from '@/components/ThemeToggle';
import { signIn, signOut } from '@/auth';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ThemeToggle />
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        <Button type="submit">Google sign in</Button>
      </form>
      <GoogleButton />
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default Home;
