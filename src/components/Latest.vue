<template>
  <div id="latestsnipps">
    <div class="listSnippet">
      <h3>Our Snippets!</h3>
      <ol>
        <li v-for="snipp in passthru" :key="snipp.id">
          <p class="snippDelete" @click="deleteSnipp(snipp.id)">Delete</p>
          <p class="snippID">{{ snipp.id }}</p>
          <p class="snippLable1">Title:</p>
          <p class="snippValue1">{{ snipp.title }}</p>  
          <p class="snippLable2">Content:</p>
          <p class="snippValue2">{{ snipp.content }}</p>
          
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

// const apiUrl = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php';
// const apiLatest = '?latest';

export default {
  name: 'Latestsnipps',
  props: {
    passthru: Array
  },
  methods: {
    deleteSnipp: function(id){
      this.$emit('deleteSnippet', id)
      console.log('(LATEST)EMIT - deleteSnipp: ', id)

    }
  }
  // data() {
  //   return {
  //      snipps: [],
  //      loading: false,
  //      submitting: false,
  //      title: '',
  //      content: '',
  //   }
  // },
  // created() {
  //   this.loading = true;
  //   this.snipps = [];

  //   axios.get(apiUrl+apiLatest)
  //   .then((response) => {
  //     const data = response.data;
  //     this.snipps = data;
  //     this.loading = false;
  //   });
  
  // },
  // methods: {
  //   fetchSnipps() {
  //     this.loading = true;
  //     this.snipps = [];

  //   axios.get(apiUrl+apiLatest)
  //     .then((response) => {
  //       const data = response.data;
  //       this.snipps = data;
  //       this.loading = false;
  //     });
  //   },
  //   deleteSnipp(id) {
  //     this.submitting = true;

  //     axios.post('https://forverkliga.se/JavaScript/api/api-snippets.php?', { delete:'delete',
  //       id:id
  //     })
  //     .then(response => {
  //       console.log('axios returned: ', response);
  //       this.submitting = false;
  //       this.fetchSnipps();
  //     });
  //   }
  // }
}
</script>

<style>
.listSnippet p {
  display: inline;
}
.snippID,.snippLable1, .snippValue1, .snippLable2, .snippValue2 {
  padding: 10px 10px 0px 0px;
}

.listSnippet ol {
  list-style-type: upper-roman;
}
.listSnippet ol li {
  padding: 0px 10px 10px 0px;
}
.addSnipp {
  padding: 20px 50px;
  border: 1;
  background-color: lightgrey;
  color: black;
}
.contentBlock > input {
  margin: 0px 20px 0px 0px;
  padding: 5px 10px;

}
.snippDelete {
  padding: 3px;
  border-radius: 5px;
  color: white;
  background-color: red;
  text-align: justify;

}
.snippLable1, .snippLable2 {
  font-weight: bold;
}

</style>