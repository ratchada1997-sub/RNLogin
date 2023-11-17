import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  xlinkHref,
} from 'react-native-svg';

import React from 'react';

export function SvgEdit(props) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.327 2.491l3.052 3.051-7.724 7.724-3.05-3.051L9.327 2.49zm5.367-.736l-1.36-1.36a1.35 1.35 0 00-1.908 0l-1.304 1.303 3.052 3.051 1.52-1.52a1.04 1.04 0 000-1.474zM.008 14.504c-.055.25.17.474.42.413l3.4-.825-3.049-3.05-.77 3.462z"
        fill="#677294"
      />
    </Svg>
  );
}

export function SvgSearch(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.725 0A5.731 5.731 0 000 5.725a5.731 5.731 0 005.725 5.725 5.731 5.731 0 005.725-5.725A5.731 5.731 0 005.725 0zm0 10.393a4.673 4.673 0 01-4.668-4.668 4.673 4.673 0 014.668-4.668 4.673 4.673 0 014.668 4.668 4.673 4.673 0 01-4.668 4.668z"
        fill="#677294"
      />
      <Path
        d="M12.845 12.098l-3.03-3.03a.528.528 0 10-.747.747l3.03 3.03a.527.527 0 00.747 0 .528.528 0 000-.747z"
        fill="#677294"
      />
    </Svg>
  );
}

export function SvgClose(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.145 5.503L10.86.788a.458.458 0 10-.648-.648L5.497 4.855.782.14a.458.458 0 00-.648.648L4.85 5.503.134 10.218a.458.458 0 10.648.648L5.497 6.15l4.715 4.715a.458.458 0 00.648-.648L6.145 5.503z"
        fill="#677294"
      />
    </Svg>
  )
}