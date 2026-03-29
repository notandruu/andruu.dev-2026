import { SectionTitle } from '@/components/SectionTitle';
import { EducationItem } from '@/components/EducationItem';
import { portfolioData } from '@/data/portfolio-data';

export function EducationSection() {
  return (
    <section className="mb-6">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-0">
        {portfolioData.education.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
