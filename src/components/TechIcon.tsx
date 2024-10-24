type TechIconProp = {
  component: React.ElementType;
};

const TechIcon = ({ component }: TechIconProp) => {
  const Component = component;
  return <Component className="size-10" />;
};

export default TechIcon;
