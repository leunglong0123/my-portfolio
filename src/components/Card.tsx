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
    extra,
    className,
    coverImage,
    subExtra,
    description,
    onClick,
  } = props;
  return (
    <div
      className={`flex h-fit w-80 flex-col gap-6 rounded-xl border border-slate-300 p-6 shadow-lg md:w-96 ${className}`}
    >
      {/* <div className="absolute top-0 right-0 px-6 py-6">{extra}</div> */}
      {coverImage ? (
        <img
          className="h-auto w-auto rounded-xl md:shrink-0"
          src={coverImage}
        />
      ) : null}
      {subExtra ? <div className="h-auto w-auto">{subExtra}</div> : null}
      <div>
        <h1>{title}</h1>
        {description ? <div>{description}</div> : null}
        {children}
      </div>
      {onClick ? <button className="h-auto self-center">text</button> : null}
    </div>
  );
}
