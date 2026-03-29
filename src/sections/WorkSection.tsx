import { SectionTitle } from '@/components/SectionTitle';
import { PortfolioAccordionItem } from '@/components/PortfolioAccordionItem';
import { portfolioData } from '@/data/portfolio-data';

export function WorkSection() {
  return (
    <section className="mb-6">
      <SectionTitle>Work</SectionTitle>
      <div className="space-y-0">
        {portfolioData.work.map((item) => (
          <PortfolioAccordionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
