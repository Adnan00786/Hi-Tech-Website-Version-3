import React from 'react';
import Link from 'next/link';
import { FaHome,FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'tel:+918885621001';
    } else {
      alert('Contact Information: Call for Inquiries\n\nContact Number: +918885621001\n\nMake a Whatsapp Call');
      openInNewTab('https://wa.me/918885621001');
    }
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

    const HomeIcon = styled(FaHome)`
    color: white;
    font-size: 1.5em;
    cursor: pointer;

    &:hover {
        color: #ff4b2b;
    }
    `;

const NavbarProducts: React.FC = () => {
  const handleHomeClick = () => {
    window.open('/', '_self');
  };

  return (
    <NavbarContainer>
      <HomeIcon onClick={handleHomeClick} />
      <button
            className="text-xl p-2 rounded-full bg-gray-700 dark:bg-gray-700 text-gray-200 dark:text-gray-200"
          > <a href="/" className="text-xl md:text-2xl hover:text-blue-500" onClick={handlePhoneClick}>
          <FaPhone />
        </a>
          </button>
    </NavbarContainer>
  );
};

export default NavbarProducts;
