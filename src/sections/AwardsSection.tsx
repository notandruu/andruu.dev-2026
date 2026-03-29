import { SectionTitle } from '@/components/SectionTitle';
import { PortfolioAccordionItem } from '@/components/PortfolioAccordionItem';
import { portfolioData } from '@/data/portfolio-data';

export function AwardsSection() {
  return (
    <section className="mb-6">
      <SectionTitle>Hackathons</SectionTitle>
      <div className="space-y-0">
        {portfolioData.awards.map((item) => (
          <PortfolioAccordionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
