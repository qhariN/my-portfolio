import Navbar from "../Navbar";

export default function PageLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-lg mx-auto p-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
        {children}
      </main>
    </>
  )
}