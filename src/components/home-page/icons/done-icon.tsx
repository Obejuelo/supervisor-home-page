import * as React from "react";

type DoneIconProps = {
  color?: string;
};

export const DoneIcon: React.FC<DoneIconProps> = (props) => (
  <svg width={28} height={28} fill="none" {...props}>
    <path
      fill={props.color || "#36B37E"}
      d="m12 14.775 5.5-5.5c.317-.317.683-.475 1.1-.475.417 0 .783.158 1.1.475.317.317.475.687.475 1.112 0 .425-.158.796-.475 1.113l-6.575 6.6a1.538 1.538 0 0 1-1.125.475c-.433 0-.808-.158-1.125-.475l-2.6-2.6a1.482 1.482 0 0 1-.463-1.113c.009-.425.171-.795.488-1.112a1.524 1.524 0 0 1 1.113-.475c.425 0 .795.158 1.112.475l1.475 1.5Z"
    />
  </svg>
);
