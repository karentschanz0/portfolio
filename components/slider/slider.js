import styles from './slider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
SwiperCore.use([Autoplay, EffectFade]);

export default () => {
  return (
    <Swiper
      className={styles.slider}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      effect="fade"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="/watercolor/forest/instagram.png" />
      </SwiperSlide>
      <SwiperSlide> <img src="/watercolor/sea/full.png" /></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};