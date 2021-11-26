import { FC } from "react";

type HeadingProps = {
	tag?: keyof JSX.IntrinsicElements;
	text: string;
}
const Heading:FC<HeadingProps> = ({ tag, text }) => {
	const Tag = tag || 'h2';
  return <Tag>{text}</Tag>
}

export default Heading;