import Footer from "../Footer";
import Navbar from "../Navbar";

export default function PageLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="max-w-screen-lg mx-auto w-full p-2 px-6 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}