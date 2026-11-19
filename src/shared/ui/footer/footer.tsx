import { Container } from "@/shared/ui/container/container";

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="border-t border-border py-8">
    <Container>
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>© {currentYear} Артём Узингер</p>

        <p className="text-center">
          Frontend Developer · React · Next.js · TypeScript
        </p>
      </div>
    </Container>
  </footer>
);
