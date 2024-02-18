interface props {
  title: String;
}

export const Title = ({ title }: props) => {
  return <h1 className="text-5xl py-7 font-bold">{title}</h1>;
};
