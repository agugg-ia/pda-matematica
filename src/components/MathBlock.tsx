import React from 'react';
import 'katex/dist/katex.min.css';
import pkg from 'react-katex';

const { InlineMath, BlockMath } = pkg;

interface Props {
  formula: string;
  block?: boolean;
}

export const MathBlock = ({ formula, block = false }: Props) => {
  return block ? <BlockMath math={formula} /> : <InlineMath math={formula} />;
};