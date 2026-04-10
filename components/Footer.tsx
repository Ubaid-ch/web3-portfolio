const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} — Built with precision
        </p>
        <p className="text-xs text-muted-foreground/40 uppercase tracking-widest">
          Full-Stack Web3 Developer &amp; Founder
        </p>
      </div>
    </footer>
  );
};

export default Footer;
