import TechIcon from './TechIcon';

type ToolBoxItemsProps = {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
};

const ToolboxItems = ({ items }: ToolBoxItemsProps) => {
  return (
    <div className="flex [mask-image:linear-gradient(to_right, transparent, black_10%,black_90%,transparent)]">
      <div className="flex flex-none">
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
