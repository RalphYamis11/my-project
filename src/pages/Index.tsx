
import PersonalInfo from "@/components/PersonalInfo";
import FamilyBackground from "@/components/FamilyBackground";
import PriorWork from "@/components/PriorWork";
import Interests from "@/components/Interests";
import OngoingProjects from "@/components/OngoingProjects";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex justify-center px-2 py-10">
      <div className="w-full max-w-4xl mx-auto">
        <PersonalInfo />
        <FamilyBackground />
        <PriorWork />
        <Interests />
        <OngoingProjects />
        <footer className="text-xs text-center text-gray-400 pt-10">
          &copy; {new Date().getFullYear()} Alex Webman • Crafted with React & TailwindCSS
        </footer>
      </div>
    </main>
  );
};

export default Index;
