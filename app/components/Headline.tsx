// /app/components/Headline.tsx
interface HeadlineProps {
  headlineTitle: string;
}

const Headline: React.FC<HeadlineProps> = ({ headlineTitle }) => {
  return (
    <div className="headline uppercase font-satisfy pt-20">
      <p className="headline-top">{headlineTitle}</p>
      <p className="headline-bottom">{headlineTitle}</p>
    </div>
  );
};

export default Headline;