<template>
    <base-border>
        <div>Content-1</div>
    </base-border>
</template>

<style scoped>
    div{
        width: 65%;
    }
    @media screen and (max-width: 600px) {
        div{
            width: 100%;
            flex: 1;
        }
    }
</style>