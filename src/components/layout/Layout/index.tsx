import Footer from "../Footer";
import Navbar from "../Navbar";

export default function PageLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="max-w-screen-lg mx-auto w-full flex flex-col flex-grow px-2 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}