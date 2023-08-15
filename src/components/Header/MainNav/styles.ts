import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

interface StyledProps {
  open: boolean;
}

export const MainNav = styled.nav<StyledProps>`
  display: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-direction: column;
  order: 9999;
  width: 100%;

  @media (min-width: 640px) {
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    flex-direction: row;
    order: 0;
    width: auto;
  }
  ${({ open }) => open && `display: flex;`};
`;

export const MainNavItem = motion.custom(styled(Link)`
  position: relative;
  margin-left: 0;
  margin-top: 0.75rem;
  border-bottom-width: 1px;
  border-color: transparent;
  color: #3c366b;

  @media (min-width: 640px) {
    margin-top: 0;
    margin-left: 2rem;
  }

  :hover {
    color: #3c366b;
  }
  width: max-content;
  &.active {
    border-color: #4fd1c5;
  }
  
  &:before {
    position: absolute;
    left: 0;
    visibility: hidden;
    width: 100%;
    height: 1px;
    content: '';
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
    background-color: #4fd1c5;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`);

export const ToogleMainNav = styled.button<StyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 1.5rem;
  height: 1.25rem;
  cursor: pointer;

  @media (min-width: 640px) {
    display: none;
  }
  outline: none !important;

  span {
    display: inline-block;
    width: 1.5rem;
    height: 1px;
    background-color: #667eea;

    transition: 0.2s;

    &:first-child {
      ${({ open }) => (open ? `margin-bottom: -1px; ` : `margin-bottom: 0.25rem; `)};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
    }

    &:last-child {
      ${({ open }) => (open ? `margin-top: -1px; ` : `margin-top: 0.25rem; `)};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
    }

    &:nth-child(2) {
      display: inline-block;
      width: 2rem;
      height: 1px;
      background-color: #4fd1c5;

      ${({ open }) => (open ? `opacity: 0;` : `opacity: 0;`)};
      transform: ${({ open }) => (open ? 'translate(20px)' : 'none')};
    }
  }
`;
