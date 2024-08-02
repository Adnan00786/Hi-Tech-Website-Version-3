import React from 'react';
import styled from 'styled-components';

interface ProductCardProps {
  image: string;
  brand: string;
  model: string; // Added model prop
  subtitle: string;
  onMoreDetailsClick: () => void;
}

const Card = styled.div`
  background: linear-gradient(135deg, #1f1c2c 0%, #928dab 100%);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  max-width: 350px;
  margin: 20px;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
  color: #fff;
  text-align: center;
`;

const BrandModel = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 1em;
  margin: 10px 0;
  color: #cfcfcf;
`;

const MoreDetailsButton = styled.button`
  background: #ff4b2b;
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  padding: 10px 20px;
  margin-top: 20px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ image, brand, model, subtitle, onMoreDetailsClick }) => {
  return (
    <Card>
      <Image src={image} alt={`${brand} product`} />
      <Content>
        <BrandModel>{brand} - {model}</BrandModel> {/* Updated to show brand and model */}
        <Subtitle>{subtitle}</Subtitle>
        <MoreDetailsButton onClick={onMoreDetailsClick}>More Details</MoreDetailsButton>
      </Content>
    </Card>
  );
};

export default ProductCard;
