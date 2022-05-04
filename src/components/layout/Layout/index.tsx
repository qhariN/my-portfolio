import Footer from "../Footer";
import Navbar from "../Navbar";

export default function PageLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen dark:text-white dark:bg-zinc-800">
      <Navbar />
      <main className="max-w-screen-md mx-auto w-full flex flex-col flex-grow px-2 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-12 gap-14">
        {children}
      </main>
      <Footer />
    </div>
  )
}