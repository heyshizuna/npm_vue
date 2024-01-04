<script>
export default {
  data() {
    return {
      picFile: '',
      fileSrc: '',
      imageFile: [],
    }
  },
  methods: {
    uploadPic(event) {
      this.picFile = event.target.files[0];
      if (this.picFile) {
        let reader = new FileReader(); //將檔案暫存
        reader.readAsDataURL(this.picFile);
        reader.onload = (e) => {
          this.fileSrc = e.target.result;
          this.imageFile = [{
            name: this.picFile.name,
            path: this.fileSrc,
          }];
          // this.imageFile.push({
          //   name: this.picFile.name,
          //   path: this.fileSrc,
          // });
        };
      };
    },
    submit() {
      console.log(this.imageFile[0]);
    },
  },
};
</script>

<template>
  <!-- 上傳檔案， accept 限制檔案類型-->
  <input type="file" accept=".jpg,.jepg,.png,.gif" @change="uploadPic">
  <button type="button" @click="submit">上傳圖片</button>
  <img :src="fileSrc" alt="">
</template>
  
<style lang="scss" scoped></style>