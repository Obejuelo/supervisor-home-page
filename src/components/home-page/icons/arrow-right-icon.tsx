import * as React from "react";

type ArrowRightIconProps = {
  color?: string;
};

export const ArrowRightIcon: React.FC<ArrowRightIconProps> = (props) => (
  <svg width={20} height={20} fill="none" {...props}>
    <path
      fill={props.color || "#448AFF"}
      d="M14.877 10.948H3.279a.916.916 0 0 1-.674-.274.916.916 0 0 1-.274-.674c0-.266.091-.49.274-.673a.916.916 0 0 1 .674-.275h11.598L13.85 8.01a.887.887 0 0 1-.276-.668.972.972 0 0 1 .969-.942c.26-.004.48.089.66.279l2.637 2.658c.186.19.28.41.28.663a.917.917 0 0 1-.28.663l-2.658 2.658a.895.895 0 0 1-.658.27.958.958 0 0 1-.673-.265.924.924 0 0 1-.285-.676c0-.26.095-.486.284-.676l1.027-1.026Z"
    />
  </svg>
);
