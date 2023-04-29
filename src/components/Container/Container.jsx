import PropTypes from 'prop-types';
import { ContainerStyle } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
