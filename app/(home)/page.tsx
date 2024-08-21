import AccessDenied from "@/components/AccessDenied";
import CTAButtons from "@/components/CTAButtons";
import Image from "next/image";

export default function Home({
  searchParams: {error},
  }: {searchParams: {error?:string};}
) {
 
  return (<main>
    {error ? (
<AccessDenied/>
      ):(
        <div className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-centre space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-lighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Get onsights quickly,with Google Forms
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Easily create and share online forms and surveys, and
                    analyze the responses in real-time.
                  </p>
              </div>
              <CTAButtons/>
            </div>
          </div>
        </div>


      )
    }
    
  </main>
   
  );
}
