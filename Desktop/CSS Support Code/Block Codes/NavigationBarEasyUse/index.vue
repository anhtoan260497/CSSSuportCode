<template>
  <nav id="navbar-easy">
    <div class="navbar-logo"></div>
    <div class="navbar-options">
      <div
        class="navbar-option"
        :class="{ active: activeNavOption === item.id ? true : false }"
        v-for="(item, idx) in navbarList"
        :key="idx"
        @click="() => handleClickNavOption(item.id)"
      >
        {{ item.name }}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBarEasy",
  data() {
    return {
      heightNavigation: [],
      activeNavOption: "",
      currentHeight: 0,
    };
  },
  mounted() {
    for (let i = 0; i < this.navbarList.length; i++) {
      const element = document.getElementById(this.navbarList[i].id);
      if (element === null) continue;
      const height = element.getBoundingClientRect().top;
      this.heightNavigation.push({
        id: this.navbarList[i].id,
        height,
      });
    }

    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleClickNavOption(id) {
      const element = this.heightNavigation.filter((item) => item.id === id);
      if (!element) return;
      this.activeNavOption = id;
      window.scrollTo({
        top: element[0].height,
        behavior: "smooth",
      });
    },
    handleScroll() {
      let navItem = "";

      for (let i = 0; i < this.heightNavigation.length; i++) {
        const el = document.getElementById(this.heightNavigation[i].id);
        if (
          el.getBoundingClientRect().top - 124 <= 0 &&
          el.getBoundingClientRect().top + el.offsetHeight > 0
        ) {
          this.activeNavOption = this.heightNavigation[i].id;
          console.log("a");
          break;
        }
      }
    },
  },
  props: {
    navbarList: {
      type: Array,
      default: [],
    },
    //  props phải cung cấp theo dạng [{id : "tên id",name : "tên hiển thị"}] , ID phải có trong component mới scroll đến được
  },
};
</script>

<style lang="scss">
@mixin flex($justify: flex-start, $align: flex-start) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
}

// nhớ thêm position sticky và top : 64px ở div bọc ngoài

#navbar-easy {
  width: 1200px;
  height: 50px; // set height px luôn bằng phần tử bọc ngoài để không bị vỡ layout
  margin: auto;
  @include flex(space-between, center);

  .navbar-logo {
    background-image: url("https://fptshop.com.vn/landing-kredivo/Content/images/navbar-name.png"); //thêm logo tại đây
    width: 120px;
    height: 40px;
  }

  .navbar-options {
    width: 800px;
    height: 100%;
    @include flex(space-between, center);

    // thay đổi style của nav-item tại đây
    .navbar-option {
      width: 200px;
      height: 100%;

      color: white;
      font-size: 20px;

      @include flex(center, center);
      cursor: pointer;
    }

    .active {
      // thay đổi style active tại đây
      border-radius: 10px;
      background-color: white;
      color: black;
    }
  }
}
</style>
