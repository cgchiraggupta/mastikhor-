import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-sm text-muted-foreground">
            © 2025 Kree8 All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/letskree8"
              target="_blank"
              rel="noopener noreferrer"
              className="body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              X
            </a>
            <a
              href="https://www.instagram.com/wekree8"
              target="_blank"
              rel="noopener noreferrer"
              className="body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:contact@sprrrint.com"
              className="body-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}