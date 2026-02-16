
import { tourData } from "@/app/tour/[slug]/data";
import TourHeader from "@/components/TourHeader";
import TourHero from "@/components/TourHero";
import TourQuickInfo from "@/components/TourQuickInfo";
import TourTabs from "@/components/TourTabs";
import TourContent from "@/components/TourContent";
import TourSidebar from "@/components/TourSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TourHeader />
      
      <main>
        <TourHero 
          title={tourData.title} 
          price={tourData.price} 
          rating={4.8} 
        />
        
        <div className="container mx-auto px-4">
          <TourQuickInfo data={tourData} />
        </div>

        <TourTabs />

        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
           <div className="w-full md:w-2/3">
             <TourContent data={tourData} />
           </div>
           
           <div className="w-full md:w-1/3">
             <TourSidebar priceData={tourData.bookingInfo} />
           </div>
        </div>
      </main>

      <footer className="bg-[#090A24] text-white py-12 mt-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Travelshop</h3>
            <p className="text-gray-400 text-sm">Your gateway to the world's most captivating wonders.</p>
          </div>
          <div>
             <h4 className="font-bold mb-4">Support</h4>
             <ul className="space-y-2 text-sm text-gray-400">
               <li>Help Center</li>
               <li>Contact Us</li>
               <li>FAQs</li>
             </ul>
          </div>
           <div>
             <h4 className="font-bold mb-4">Company</h4>
             <ul className="space-y-2 text-sm text-gray-400">
               <li>About Us</li>
               <li>Careers</li>
               <li>Blog</li>
             </ul>
          </div>
           <div>
             <h4 className="font-bold mb-4">Newsletter</h4>
             <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded bg-gray-800 text-white border-none focus:ring-2 focus:ring-[#854EC9]" />
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
           © 2026 Travelshop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
