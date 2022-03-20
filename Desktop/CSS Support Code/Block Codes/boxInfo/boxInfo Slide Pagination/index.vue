<template>
  <div id="boxInfo-Slide">
    <Swiper :options="swiperOption" ref="swiper" class="swiper desktop">
      <SwiperSlide>
        <img
          alt="Điểm nhấn sản phẩm"
          class="px-0 unpointer"
          src="https://image.cellphones.com.vn/1920x/media/PreOrder/Mi12/Chip_12.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Điểm nhấn sản phẩm"
          class="px-0 unpointer"
          src="https://image.cellphones.com.vn/1920x/media/PreOrder/Mi12/Pin_12.png"
        />
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>

    <Swiper :options="swiperOption" ref="swiper" class="swiper mobile">
      <SwiperSlide>
        <img
          alt="Điểm nhấn sản phẩm"
          class="px-0 unpointer"
          src="https://image.cellphones.com.vn/640x/media/PreOrder/Mi12/mobile/Chip_12.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt="Điểm nhấn sản phẩm"
          class="px-0 unpointer"
          src="https://image.cellphones.com.vn/640x/media/PreOrder/Mi12/mobile/Pin_12.png"
        />
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        slidesPerColumn: 1,
        slidesPerColumnFill: "row",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss">
#boxInfo-Slide {
  margin-top: 20px;

  .mobile {
    display: none;
  }

  .swiper-slide {
    background-color: black;
    height: 350px;

    img {
      width: 100%;
      min-height: 350px;
      object-fit: cover;
    }
  }

  .swiper-pagination {
    .swiper-pagination-bullet {
      background-color: gray;
    }
  }
}

@media screen and (min-width: 990px) and (max-width: 1199px) {
  #boxInfo-Slide {
    .swiper-slide {
      background-color: black;
      height: 270px;

      img {
        width: 100%;
        min-height: 270px;
        object-fit: cover;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 989px) {
  #boxInfo-Slide {
    .swiper-slide {
      background-color: black;
      height: 210px;

      img {
        width: 100%;
        min-height: 210px;
        object-fit: cover;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  #boxInfo-Slide {
    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }

    .swiper-slide {
      background-color: black;
      height: 180px;

      img {
        width: 100%;
        min-height: 180px !important;
        object-fit: cover;
      }
    }
  }
}
</style>
