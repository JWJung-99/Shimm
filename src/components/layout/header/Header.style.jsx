import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  z-index: 999;
  padding-bottom: 20px;

  @media (min-width: 740px) {
    flex-wrap: nowrap;
    padding: 20px;
  }

`;

export const Logo = styled(Link)`
  width: 70px;
  height: 16px;
  order: 1;
  padding: 20px 20px 0 20px;

  &:focus {
    box-shadow: 0 0 0 2px rgba(115, 146, 125, 1);
    border-radius: 4px;
  }

  @media (min-width: 740px) {
    width: 130px;
    height: 30px;
    padding: unset;
  }
`;

export const Img = styled.img`
  object-fit: cover;
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: ${props => (props.$clicked === true ? 'block' : 'none')};
  order: 3;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: unset;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
  box-shadow: 2px 10px 12px -15px rgba(0,0,0,0.64);

  @media (min-width: 740px) {
    order: 2;
    display: flex;
    gap: 60px;
    align-items: center;
    box-shadow: unset;
    border-radius: unset;
    background-color: unset;
  }
`;

export const HeaderLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: 200;
  color: rgba(51, 86, 53, 1);
  transition: color 0.5s ease-out;

  &:last-child {
    margin-bottom: unset;
  }

  &:hover {
    color: rgba(85, 162, 90, 1)
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(115, 146, 125, 1);
    border-radius: 4px;
  }

  @media (min-width: 740px) {
    margin-bottom: unset;
    display: unset;

    &:first-child {
      margin-left: auto;
    }
  }
`;

export const NavButton = styled.button`
  order: 2;
  width: 20px;
  margin: 20px 20px 0 auto;

  &:before {
    content: '';
    display: block;
    width: 16px;
    height: 12px;
    background-image: ${props =>
      props.$isClicked
        ? `url(${props.$iconClose})`
        : `url(${props.$iconMenu})`};
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(115, 146, 125, 1);
    border-radius: 4px;
  }

  @media (min-width: 740px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 740px) {
    gap: 20px;
  }
`;
