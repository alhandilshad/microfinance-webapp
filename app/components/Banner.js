import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
    <div className="relative w-full bg-white px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-[#8dc63f]">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              <span className="text-white">Lessons and insights</span>
              <br />
              <span className="text-white">from 8 years</span>
            </h1>
            <p className="mt-6 text-white text-lg">
              Where to grow your business as a photographer, site or social media?
            </p>
            <Button className="mt-8 bg-[#00563B] hover:bg-[#002D82] text-white px-8 py-2 h-auto text-base">
              Register
            </Button>
          </div>

          {/* Right illustration */}
          <div className="flex-1 relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c5ecd1d2-a974-4be9-b907-5eca48d91f22.jpg-Cs86iwnuMYaAu4bIjcBM8Bo8aQOuP1.jpeg"
              alt="Banner illustration"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

