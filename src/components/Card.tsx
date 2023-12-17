import React, { HTMLAttributes } from 'react';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode | undefined;
  extra?: React.ReactNode;
  subExtra?: React.ReactNode;
  className?: string | undefined;
  coverImage?: string;
  description?: string;
}

export default function Card(props: CardProps) {
  const {
    title,
    children,
    className,
    coverImage,
    subExtra,
    description,
    onClick,
  } = props;
  return (
    <div
      className={`flex h-auto w-80 flex-col md:flex-row gap-6 md:w-8/12 border border-slate-500 ${className}`}
    >
      {/* <div className="absolute top-0 right-0 px-6 py-6">{extra}</div> */}
      {coverImage ? (
        <img
          alt="coverImage"
          className="h-fit w-auto md:shrink-0 md:h-auto md:w-64 md:object-cover"
          src={coverImage}
        />
      ) : null}
      {subExtra ? <div className="h-auto w-auto">{subExtra}</div> : null}
      <div className="md:flex md:flex-col md:justify-between">
        <h1 className="text-3xl md:text-xl font-bold text-left mx-4 md:my-4 md:mx-4">
          {title}
        </h1>
        {description ? (
          <div className="text-left m-4 text-sm md:text-xs">{description}</div>
        ) : null}
        {children}
      </div>
      {onClick ? <button className="h-auto self-center">text</button> : null}
    </div>
  );
}
