export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>
    <h1>Private</h1>
    {children}</main>
}