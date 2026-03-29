import { SectionTitle } from '@/components/SectionTitle';
import { PortfolioAccordionItem } from '@/components/PortfolioAccordionItem';
import { portfolioData } from '@/data/portfolio-data';

export function SoftwareSection() {
  return (
    <section className="mb-6">
      <SectionTitle>Software</SectionTitle>
      <div className="space-y-0">
        {portfolioData.software.map((item) => (
          <PortfolioAccordionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
