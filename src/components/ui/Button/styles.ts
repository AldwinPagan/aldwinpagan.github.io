import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 9999px;
  border-width: 1px;
  color: #312e81;
  border-color: #81e6d9;

  ${({ primary }) => (primary ? `background-color: #81e6d9` : `color: #4F46E5;`)};

  ${({ block }) => block && `width: 100%;`};
`);
