import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface Props {
	text: string,
	linkTo: string,
}

export default function HiddenSkipLink({ text, linkTo }: Props) {
	const [isFocused, setIsFocused] = useState(false);

	const spring = useSpring({
		opacity: isFocused ? 1 : 0,
		reverse: !isFocused,
	});

	return(
		<animated.div
			className="max-w-lg mx-auto text-teal-400"
			style={{ ...spring }}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		>
			<a href={linkTo}>{text}</a>
		</animated.div>
	);
}
