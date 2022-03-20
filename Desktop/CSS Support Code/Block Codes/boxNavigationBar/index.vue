<template>
  <div id="Mi12-navbar">
    <div class="col-12 custom-tabs">
      <div class="row justify-content-between">
        <div
          class="logo col-xl-6 col-lg-4 col-md-3 col-sm-4 col-2 d-flex align-items-center"
        >
          <div class="navbar-brand ml-0 my-1 logo-xiaomi"></div>
        </div>
        <div class="logo-mobile col-xl-6 col-lg-4 col-md-3 col-sm-4 col-2">
          <div class="navbar-brand ml-0 my-1 logo-xiaomi"></div>
        </div>
        <div class="col-xl-6 col-lg-8 col-md-9 col-sm-8 col-10">
          <ul ref="navbarRef" class="nav nav-tabs main-nav-tabs w-100">
            <li
              :class="positionBlock == item.id ? 'active' : ''"
              @click="(e) => handleNavigate(e, item.id)"
              class="nav-item"
              v-for="item in list"
              :key="item.id"
            >
              {{ item.label }}
            </li>
            <li
              @click="(e) => handleNavigate(e, 'boxPreOrder')"
              class="nav-item btn-preorder"
            >
              ĐẶT GẠCH NGAY
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import forEach from "lodash/forEach";

export default {
  props: {
    list: {
      type: Array,
      default: [],
      required: true,
    },
    navActive: {
      type: String,
      default: "",
    },
    navId: {
      type: String,
      default: "cps-nye__block-navmenu",
    },
    checkHeightHeader: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      listID: [],
      positionBlock: "flashsales",
    };
  },
  methods: {
    forEach,

    hasClass: function (element, className) {
      return (
        (" " + element.className + " ").indexOf(" " + className + " ") > -1
      );
    },

    scrollToTab: function (id) {
      let headerHeight = 0;

      let navFixedHeight = 0;

      let isNavFixed = this.hasClass(
        document.getElementById(this.navId),
        "nav-fixed"
      );

      if (this.checkHeightHeader) {
        headerHeight = document.getElementById("cpsHeader").offsetHeight;
      }

      if (isNavFixed) {
        navFixedHeight = document.getElementById(this.navId).offsetHeight;
      }

      setTimeout(() => {
        const element = document.getElementById(id);
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const result =
          element.getBoundingClientRect().top +
          scrollTop -
          headerHeight -
          navFixedHeight -
          0;
        window.scrollTo({
          top: result,
          behavior: "smooth",
        });
      }, 100);
    },

    handleNavigate: function (e, id) {
      this.scrollToTab(id);
      if (e) {
        forEach(this.$refs.navbarRef.querySelectorAll("li"), (node) => {
          node.classList.remove("active");
        });
        e.target.parentElement.classList.toggle("active");
        e.target.classList.toggle("active");
      }
    },

    handleScroll() {
      const element1 = document.getElementById(this.listID[0]);
      const element2 = document.getElementById(this.listID[1]);
      const element3 = document.getElementById(this.listID[2]);

      if (
        element1.getBoundingClientRect().top - 124 <= 0 &&
        element1.getBoundingClientRect().top + element1.offsetHeight > 0
      ) {
        this.positionBlock = this.listID[0];
        document.getElementById("navigationBar").scrollLeft = 0;
      }
      if (
        element2.getBoundingClientRect().top - 123 <= 0 &&
        element2.getBoundingClientRect().top + element2.offsetHeight > 0
      ) {
        this.positionBlock = this.listID[1];
        document.getElementById("navigationBar").scrollLeft = 100;
      }
      if (
        element3.getBoundingClientRect().top - 123 <= 0 &&
        element3.getBoundingClientRect().top + element3.offsetHeight > 0
      ) {
        this.positionBlock = this.listID[2];
        document.getElementById("navigationBar").scrollLeft = 350;
      }
    },

    getAllIdList() {
      forEach(this.list, (item) => {
        this.listID.push(item.id);
      });
    },
  },
  mounted() {
    this.getAllIdList();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
#Mi12-navbar {
  width: 100%;

  .logo-mobile {
    display: none;
    .navbar-brand {
      background-image: url("https://i.postimg.cc/PfCv3Syg/mi-logo.png") !important;
    }
  }

  .logo {
    // display: none !important;
    .navbar-brand {
      background-image: url("https://i.postimg.cc/PfCv3Syg/mi-logo.png") !important;
    }
  }

  .nav-item {
    color: white !important;
  }

  .btn-preorder {
    background-color: transparent !important;
    color: red !important;
  }
}

@media screen and (max-width: 767px) {
  .logo-mobile {
    display: block !important;
    display: flex;
    justify-content: center;
    align-items: center;

    .navbar-brand {
      width: 30px !important;
    }
  }

  .nav-item {
    font-size: 11px !important;
    margin-top: 5px !important ;
  }
}
</style>
