<template>
  <div id="boxUuDai" v-lazy-container="{ selector: 'img' }">
    <img
      data-src=" https://image.cellphones.com.vn/1920x/media/PreOrder/Mi12/Box_Gift.png"
      class="w-100 desktop"
      alt="Box Gift"
    />
    <img
      data-src="https://image.cellphones.com.vn/640x/media/PreOrder/Mi12/mobile/Box_Gift.png"
      class="w-100 mobile"
      alt="Box Gift"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#boxUuDai {
  min-height: 928px;

  img {
    width: 100%;
    min-height: 928px;
    object-fit: cover;
  }

  .mobile {
    display: none;
  }
}

@media screen and (min-width: 990px) and (max-width: 1199px) {
  #boxUuDai {
    min-height: 700px;
    background-color: black;

    img {
      width: 100%;
      min-height: 700px;
      object-fit: cover;
    }

    .mobile {
      display: none;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 989px) {
  #boxUuDai {
    min-height: 500px;
    background-color: black;

    img {
      width: 100%;
      min-height: 500px;
      object-fit: cover;
    }

    .mobile {
      display: none;
    }
  }
}

@media screen and (min-width: 540px) and (max-width: 767px) {
  #boxUuDai {
    min-height: 500px;
    background-color: black;

    img {
      width: 100%;
      min-height: 500px;
      object-fit: cover;
    }

    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }
}

@media screen and (max-width: 540px) {
  #boxUuDai {
    min-height: 500px;
    background-color: black;

    img {
      width: 100%;
      min-height: 500px;
      object-fit: cover;
    }

    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }
}
</style>
