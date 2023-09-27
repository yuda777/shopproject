import React from "react";

export const Switch = ({ children }: any) => {
  let matchChild: any = null;
  let defaultCase: any = null;

  React.Children.forEach(children, (child) => {
    if (!matchChild && child.type == Case) {
      const { condition } = child.props;
      console.log({ condition });
      const conditionResult = Boolean(condition);
      if (conditionResult) {
        matchChild = child;
      }
    } else if (!defaultCase && child.type == Default) {
      defaultCase = child;
    }
  });
  return matchChild ?? defaultCase ?? null;
};

export const Case = ({ children }: any) => {
  return children;
};

export const Default = ({ children }: any) => {
  return children;
};
