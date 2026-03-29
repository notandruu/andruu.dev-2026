import { ProfileHeader } from '@/sections/ProfileHeader';
import { SoftwareSection } from '@/sections/SoftwareSection';
import { AwardsSection } from '@/sections/AwardsSection';
import { WorkSection } from '@/sections/WorkSection';
import { EducationSection } from '@/sections/EducationSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-content mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-12">
        <ProfileHeader />
        <SoftwareSection />
        <AwardsSection />
        <WorkSection />
        <EducationSection />
      </main>
    </div>
  );
}

export default App;
