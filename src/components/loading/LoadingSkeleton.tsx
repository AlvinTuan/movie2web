import React from "react";

interface LoadingSkeletonProps {
  width: string;
  height: string;
  radius?: string;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = (props) => {
  return (
    <div
      className={`skeleton ${props.className}`}
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
