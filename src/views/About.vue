<template>
  <div class="about">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
    <span>Aspernatur aut culpa distinctio harum minus qui quibusdam,</span>
    <span>quidem sint suscipit, ut, veritatis voluptatum! Autem cumque iure nesciunt quisquam repellendus, reprehenderit tempore!</span>
  </div>
</template>

<script>
  export default {
      data(){
          return{}
      },
      methods:{

      },
      mounted(){

        function redata(number) {
            return function (value) {
                return number + value
            }
        }
          let request = redata(6)
          console.log(request(10))
      },
  }
</script>

<style lang="scss">
  .about{
    width: 1000px;
    height: 30px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border: 1px solid red;
    span{
      display: inline-block;
      padding: 0 5px;
    }

  }

</style>
