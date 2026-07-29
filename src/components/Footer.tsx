import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-surface-200 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Baterias Express"
              width={350}
              height={95}
              className="h-[4.5rem] sm:h-24 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>

          <div className="text-sm text-text-secondary text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Baterias Express. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
