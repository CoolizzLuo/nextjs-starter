'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/Button';

const GoogleButton = () => {
  return (
    <Button type="button" onClick={() => signIn('google')}>
      Google Button
    </Button>
  );
};

export default GoogleButton;
