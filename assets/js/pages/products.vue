<template>
    <h1>Hello {{ firstname }} !</h1>
</template>

<script>
export default {
    name: 'Products',
    data() {
        return {
            firstname: 'yoann',
        };
    },
};
</script>
