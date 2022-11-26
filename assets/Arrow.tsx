import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Arrow = (props: any) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M22.667 10.667 28 16m0 0-5.333 5.333M28 16H4"
      stroke="#542EE0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Arrow;
