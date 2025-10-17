
export const metadata = {
  title: 'Landing Page — Heitor',
  description: 'Landing page criada no Canvas e exportada para Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-950">{children}</body>
    </html>
  );
}
