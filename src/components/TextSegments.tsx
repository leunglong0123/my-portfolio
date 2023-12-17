import React from 'react';

type TextSegment = {
  text: string;
  isStrong?: boolean;
};

type TextSegmentDescriptionProps = {
  segments: TextSegment[];
  isListItem?: boolean;
  className?: string;
  keyOf?: string;
};

const TextSegmentDescription: React.FC<TextSegmentDescriptionProps> = ({
  segments,
  isListItem,
  className = '',
  keyOf,
}) => {
  const Tag = isListItem ? 'li' : 'div'; // Conditionally set the tag type

  return (
    <Tag
      key={keyOf + '-tag'}
      className={`text-sm md:text-base list-outside ${className}`}
    >
      {segments.map((item, index) => (
        <React.Fragment key={index + 'tag-element-' + keyOf}>
          {item.isStrong ? <strong>{item.text}</strong> : item.text}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default TextSegmentDescription;
