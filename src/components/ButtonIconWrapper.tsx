import { FunctionComponent } from "react";

interface Props {
  Icon: FunctionComponent;
}

export const ButtonWithIcon = ({ Icon }: Props) => {
  // console.log(icon);
  return (
    <button className="ml-16">
      <Icon />
    </button>
  );
};
