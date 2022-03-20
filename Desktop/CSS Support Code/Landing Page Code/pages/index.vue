<template>
  <!-- <Mi12LP 
   :content-main="metaContent.content"
    :default-select-ver="33630"
    base-url="xiaomi-mi-12"
  /> -->

  <!-- write component here  -->
  <!-- default-select-ver is product id of item -->
  <div></div>
</template>

<script>
export default {
  async asyncData() {
    const url = 'https://cellphones.com.vn/lapi/dev/getDataContentProduct';
    try {
      const result = await axios({
        method: 'GET',
        url,
        // params: {'productId': 33630} enter product_id here to get data  , 
      })
      if (result.status === 200) {
        const metaContent = result.data
        return {metaContent}
      }
    } catch (error) {
      console.log(error)
    }
  },
  head() {
    return {
      title: this.metaContent.meta_description,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description',
          content: this.metaContent.meta_description
        },
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'keywords', content: this.metaContent.meta_keyword},
        {name: 'url', content: 'https://cellphones.com.vn/xiaomi-mi-12.html'},
        {name: 'robots', content: "INDEX,FOLLOW"},
        {property: "og:locale", content: "vi_VN"},
        {property: "og:type", content: "website"},
        {property: "og:title", content: this.metaContent.meta_title},
        {
          property: "og:description",
          content: this.metaContent.meta_description
        },
        {property: "og:site_name", content: this.metaContent.meta_title}
      ],
    }
  },
  components: {
    // 'Mi12LP': () => import('~/components/Xiaomi12/Xiaomi12.vue'),
    // import component at this area
  },
}
</script>