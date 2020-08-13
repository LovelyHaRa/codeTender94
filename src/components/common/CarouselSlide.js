import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, makeStyles, Fade } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const CarouselSlideBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .carousel-arrow {
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    img {
      width: 100%;
    }
  }
`;

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    margin: '2rem',
  },
}));

const CarouselSlide = ({ content = [] }) => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const contentSize = content.length;
  const classes = useStyles();

  const handleArrowClick = (direction = 'left') => {
    console.log('123');
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + contentSize) % contentSize;
    setFadeIn(false);
    setTimeout(() => {
      setIndex(newIndex);
      setFadeIn(true);
    }, 200);
  };

  const Arrow = ({ direction = 'left' }) => {
    return (
      <div
        onClick={() => handleArrowClick(direction)}
        className="carousel-arrow"
      >
        <FontAwesomeIcon
          icon={direction === 'left' ? faAngleLeft : faAngleRight}
          style={{ color: '#000' }}
          size="2x"
        />
      </div>
    );
  };

  return (
    <CarouselSlideBlock>
      <Arrow direction="left" />
      <Fade in={fadeIn}>
        <div>
          <Card className={classes.card}>
            <img src={content[index]} alt="detail" />
          </Card>
        </div>
      </Fade>
      <Arrow direction="right" />
    </CarouselSlideBlock>
  );
};

export default CarouselSlide;
