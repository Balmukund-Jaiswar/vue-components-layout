<template>
    <div class="outerdiv">
        <ContentOne/>
        <div class="innerdiv">
            <ContentTwo/>
            <ContentThree/>
        </div>
    </div>
</template>

<script>
    import ContentOne from './ContentOne.vue';
    import ContentTwo from './ContentTwo.vue';
    import ContentThree from './ContentThree.vue';

    export default{
        components:{
            ContentOne,
            ContentTwo,
            ContentThree,
        }
    }
</script>

<style scoped>
    .outerdiv{
        height: 70%;
        display: flex;
        gap: 10px; 
    }
    .innerdiv{
        display: flex;
        flex-direction: column;
        width: 35%;
        gap: 10px;
    }

    @media screen and (max-width: 600px) {
      .outerdiv{
        flex-direction: column;
      }
      .innerdiv{
        width: 100%;
        flex: 1;
    }
    }
</style>