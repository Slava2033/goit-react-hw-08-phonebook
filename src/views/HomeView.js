import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import phone1 from './images/phone1.jpg';
import phone2 from './images/phone2.jpg';
import phone3 from './images/phone3.jpg';
import Confetti from 'react-confetti';

const styles = {
  container: {
    minHeight: 'calc(100vh - 200px)',
    maxWidth: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '700px',
  },
};

const HomeView = () => {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    centerPadding: '60px',
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <>
      {loggedIn && (
        <Confetti
          numberOfPieces={300}
          recycle={false}
          colors={['#000', '#fff', '#fcba03']}
        />
      )}

      <Slider {...settings}>
        <div className={styles.container}>
          <img src={phone1} alt={'black old phone'} />
        </div>
        <div>
          <img src={phone2} alt={'old phone'} />
        </div>
        <div>
          <img src={phone3} alt={'old phone'} />
        </div>
      </Slider>
    </>
  );
};

export default HomeView;
