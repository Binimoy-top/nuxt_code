<template>
  <form @submit.prevent="OnSave">
    <AppControlInput v-model="editedpost.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedpost.title">Title</AppControlInput>

   

    <AppControlInput control-type="textarea" v-model="editedpost.PreviewText"
      >previewText</AppControlInput
    >
    <AppControlInput control-type="textarea" v-model="editedpost.content"
      >Content</AppControlInput
    >

    <AppButton  v-show="ShowSaveToUpdate == true" type="submit">Update</AppButton>
    <AppButton  v-show="ShowSaveToUpdate != true" type="submit">Save</AppButton>


    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
      
    >
     <AppButton 
     v-show="ShowDel == true"
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="$emit('del')"
      >Delete</AppButton
      
    >
  
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput.vue';
import AppButton from '@/components/UI/AppButton.vue';

export default {
  name:'AdminPostForm',
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
     ShowDel: {
      type: Boolean,
      required: true,
    },
    ShowSaveToUpdate: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {




      editedpost: this.post? {...this.post} :

       {
        author: "",
        title: "",
        content: "",
        PreviewText:''
      },

    };
  },
  methods: {
    OnSave() {
      //save
      // console.log(this.editedpost);
      this.$emit('submit',this.editedpost)
    },
    onCancel() {
      //navigate back
      this.$router.push("/binimoy-admin");
    },
  },
};
</script>