import { createElement } from 'react';
import * as Icon from 'phosphor-react';

export default function IconComponent({ iconName, size = 24, className = '' }) {
  return createElement(Icon[iconName], {
    size: `${size}px`,
    className: className,
  });
}
