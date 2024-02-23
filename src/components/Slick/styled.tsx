import styled from '@emotion/styled';
import Slider from 'react-slick/lib/slider';

export const Carousel = styled(Slider)(() => ({
  marginTop: '20px',

  '& ul li button:before': {
    fontSize: '10px',
    color: 'rgb(150, 158, 171)'
  },

  '& li.slick-active button:before': {
    color: 'white'
  },

  '& .slick-list': {
    overflow: 'visible',
    position: 'relative',
    display: 'block'
  },

  '& button': {
    zIndex: 1
  }
}));

export const Wrap = styled.div(() => ({
  cursor: 'pointer',
  '& img': {
    border: '4px solid transparent',
    borderRadius: '4px',
    width: '100%',
    height: '350px',
    boxShadow: 'rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px',
    transitionDuration: '200ms',

    '&:hover': {
      border: '4px solid rgba(249, 249, 249, 0.8)'
    }
  }
}));

export const StyledBody = styled.div(() => ({
    overflow: 'hiden'
}));