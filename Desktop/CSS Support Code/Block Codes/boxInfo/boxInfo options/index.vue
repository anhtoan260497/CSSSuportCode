<template>
  <div id="boxInfo-camera">
    <p class="boxInfo-title">CAMERA CHINH PHỤC MỌI THỬ THÁCH</p>
    <div class="boxInfo-options">
      <div
        class="boxInfo-option"
        :class="{ active: boxInfoCameraChoose === 'Mi12Pro' }"
        @click="boxInfoCameraChoose = 'Mi12Pro'"
      >
        XIAOMI 12 PRO
      </div>
      <div
        class="boxInfo-option"
        :class="{ active: boxInfoCameraChoose === 'Mi12' }"
        @click="boxInfoCameraChoose = 'Mi12'"
      >
        XIAOMI 12
      </div>
    </div>
    <div class="boxInfo-image desktop">
      <img
        v-if="boxInfoCameraChoose === 'Mi12Pro'"
        src="https://image.cellphones.com.vn/1920x/media/PreOrder/Mi12/Camera_Mi12Pro.png"
        alt="camera Mi 12 Pro"
      />

      <img
        v-if="boxInfoCameraChoose === 'Mi12'"
        src="https://image.cellphones.com.vn/1920x/media/PreOrder/Mi12/Camera_Mi12.png"
        alt="camera Mi 12"
      />
    </div>
    <div class="boxInfo-image mobile">
      <img
        v-if="boxInfoCameraChoose === 'Mi12Pro'"
        src="https://image.cellphones.com.vn/613x/media/PreOrder/Mi12/mobile/Camera_Mi12Pro.png"
        alt="camera Mi 12 Pro"
      />

      <img
        v-if="boxInfoCameraChoose === 'Mi12'"
        src="https://image.cellphones.com.vn/613x/media/PreOrder/Mi12/mobile/Camera_Mi12.png"
        alt="camera Mi 12"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxInfoCameraChoose: "Mi12Pro",
    };
  },
};
</script>

<style lang="scss">
#boxInfo-camera {
  width: 100%;
  height: 450px;
  border: 1px solid red;
  text-align: center;
  color: white;

  .boxInfo-options {
    width: 200px;
    height: 25px;
    margin: auto;
    background: linear-gradient(180deg, rgb(100, 100, 100), rgb(37, 37, 37));
    border-radius: 20px;

    @include flex(space-between, center);

    .boxInfo-option {
      width: 50%;
      border-radius: 20px;
      height: 100%;
      @include flex(center, center);
      font-weight: 700;
    }

    .active {
      color: black;
      background-color: white;
    }
  }

  .boxInfo-image {
    width: 100%;
    height: 350px;

    img {
      width: 100%;
      min-height: 350px;
      object-fit: cover;
    }
  }

  .mobile {
    display: none;
  }
}

@media screen and (min-width: 990px) and (max-width: 1199px) {
  #boxInfo-camera {
    height: 400px;

    .boxInfo-image {
      height: 320px;

      img {
        min-height: 320px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 989px) {
  #boxInfo-camera {
    height: 330px;

    .boxInfo-image {
      height: 250px;

      img {
        min-height: 250px;
      }
    }
  }
}

@media screen and (min-width: 540px) and (max-width: 767px) {
  #boxInfo-camera {
    height: 380px;

    .boxInfo-image {
      min-height: 220px;

      img {
        min-height: 220px;
      }
    }

    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
}

@media screen and (max-width: 540px) {
  #boxInfo {
    min-height: 300px;

    .boxInfo-title {
      font-size: 20px;
    }

    #boxInfo-camera {
      height: 300px;

      .boxInfo-options {
        width: 250px;
        height: 30px;


        .boxInfo-option {
          font-size: 14px;
        }
      }

      .boxInfo-image {
        height: 150px;

        img {
          min-height: 150px;
        }
      }

      .desktop {
        display: none;
      }

      .mobile {
        display: block;
      }
    }
  }
}
</style>
