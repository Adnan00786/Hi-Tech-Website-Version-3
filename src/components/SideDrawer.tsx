import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaDownload, FaPhone, FaTools } from 'react-icons/fa';

// Define types
type Feature = {
  label: string;
  value: string;
};

type ProductDescription = {
  features: Feature[];
  reasons: Feature[];
  suitability: string;
};

type Product = {
  image: string;
  brand: string;
  subtitle: string;
  description: ProductDescription | string;
  model: string;
};

const whatsappNumber = '918885621001'; 

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(${props => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 1000;  /* Ensures the drawer is above other elements */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;
`;

const Brand = styled.h2`
  font-size: 2em;
  margin: 0;
  color: #333;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Model = styled.h3`
  font-size: 1.5em;
  color: #666;
  margin: 0;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Description = styled.div`
  font-size: 1em;
  color: #555;
  text-align: left;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const ButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  background: #ff4b2b;
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  font-size: 0.9em;
  padding: 10px;
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
  }

  @media (max-width: 768px) {
    flex: 1 1 80%;
  }
`;

type SideDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product; // Ensure this matches the updated type definition
};

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose, product }) => {
  const renderDescription = () => {
    if (typeof product.description === 'string') {
      return <p>{product.description}</p>;
    }

    const { features, reasons, suitability } = product.description;

    return (
      <Description>
        <br />
        <h4 className='text-center text-xl'><strong>Key Features</strong></h4>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <strong>{feature.label}:</strong> {feature.value}
            </li>
          ))}
        </ul>
        <br />
        <h4 className='text-center text-xl'><strong>Why Choose?</strong></h4>
        <ul>
          {reasons.map((reason, index) => (
            <li key={index}>
              <strong>{reason.label}:</strong> {reason.value}
            </li>
          ))}
        </ul>
        <br />
        <h4 className='text-center text-xl'><strong>Suitability</strong></h4>
        <p>{suitability}</p>
        <br />
      </Description>
    );
  };

  return (
    <DrawerContainer isOpen={isOpen}>
      <Header>
        <Brand>{product.brand} - {product.model}</Brand>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Header>
      {renderDescription()}
      <ButtonGrid>
        <Button>
          <FaPhone />
          <a href={`https://wa.me/${whatsappNumber}`} target='_blanck'>
          Contact Now
          </a>
        </Button>
        <Button>
          <FaTools />
          <a href={`https://wa.me/${whatsappNumber}`} target='_blanck'>
          Get Service
          </a>
        </Button>
      </ButtonGrid>
    </DrawerContainer>
  );
};

export default SideDrawer;
