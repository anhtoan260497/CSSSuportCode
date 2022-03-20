<template>
  <div id="boxBanner">
    <img
      src="https://image.cellphones.com.vn/1920x/media/PreOrder/Mi12/Banner_Header_KV.png"
      alt="banner"
      style="width: 100%"
      class="desktop"
    />

    <img
      src="https://image.cellphones.com.vn/640x/media/PreOrder/Mi12/mobile/Banner_Header_KV.png"
      alt="banner"
      style="width: 100%"
      class="mobile"
    />
    <button
      class="btn-tc"
      @click="tcContent = !tcContent"
      style="cursor: pointer"
    >
      Xem chi tiết
    </button>
    <b-modal
      id="tc-content"
      v-model="tcContent"
      centered
      scrollable
      title="HƯỚNG DẪN ĐẶT HÀNG"
    >
      <div v-if="contentTC" v-html="contentTC"></div>
      <template #modal-footer="{ cancel }">
        <b-button size="md" class="btn btn-danger" @click="cancel()">
          Đóng
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tcContent: false,
    };
  },
};
</script>

<style lang="scss">
#boxBanner {
  width: 100%;
  height: 400px;
  border: 1px solid red;
  position: relative;

  img {
    width: 100%;
    min-height: 400px;
    object-fit: cover;
  }

  .btn-tc {
    bottom: 60px;
    left: 60%;
    border-radius: 15px;
    background-color: rgb(233, 4, 10);
    text-decoration: unset;
    font-style: unset;
    color: white;
    text-transform: capitalize;
    position: absolute;
    width: 120px;
    height: 40px;
    font-size: 16px;

    border: none;
    outline: none;
  }
}

@media screen and (min-width: 990px) and (max-width: 1199px) {
  #boxBanner {
    height: 350px;

    img {
      min-height: 350px;
    }

    .btn-tc {
      bottom: 30px;
      left: 63%;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 989px) {
  #boxBanner {
    height: 280px;

    img {
      min-height: 280px;
    }

    .btn-tc {
      bottom: 30px;
      left: 63%;
    }
  }
}

@media screen and (min-width: 540px) and (max-width: 767px) {
  #Mi-12 {
    #boxBanner {
      height: 280px;

      .desktop {
        display: none;
      }

      .mobile {
        display: block;
      }

      img {
        min-height: 280px;
      }

      .btn-tc {
        bottom: 20px;
        left: 40%;
        height: 30px;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  #Mi-12 {
    #boxBanner {
      height: 280px;

      .desktop {
        display: none;
      }

      .mobile {
        display: block;
      }

      img {
        min-height: 280px;
      }

      .btn-tc {
        bottom: 20px;
        left: 37%;
        height: 30px;
      }
    }
  }
}
</style>
