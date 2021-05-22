<template>
    <div class="container_load" :class="load ? '' : 'hidden'">
        <b-spinner class="load" variant="primary" label="Spinning"></b-spinner>
    </div>
</template>

<script>
export default {
    name: "load",
    props: {
        load: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
	.container_load {
		width: 100%;
		height: 100%;
		top: 50%;
		left: 50%;
		position: absolute;
        z-index: 2000;
	}

	.load {
		width: 3rem;
    	height: 3rem;
	}
</style>