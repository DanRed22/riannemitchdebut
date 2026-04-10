import Navbar from "@/components/Navbar";
import InvitationSection from "@/components/sections/InvitationSection";
import ProgramSection from "@/components/sections/ProgramSection";
import GallerySection from "@/components/sections/GallerySection";
import DebutCourtSection from "@/components/sections/DebutCourtSection";
import DressCodeSection from "@/components/sections/DressCodeSection";
import MapSection from "@/components/sections/MapSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <InvitationSection />
      <ProgramSection />
      <GallerySection />
      <DebutCourtSection />
      <DressCodeSection />
      <MapSection />
    </main>
  );
}
