<template>
    <div class="card">
        <div class="card-body p-3 d-flex align-items-center">
            <div :class="classCard" class="p-3 mfe-3 text-white">
                <i :class="icone"></i>
            </div>
            <div>
                <div class="text-value text-primary">{{ total }}</div>
                <div class="text-muted text-uppercase font-weight-bold small">{{ titulo }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardHome",
    props: {
        total: {
            type: Number,
            default: 0
        },
        icone: {
            type: String,
            default: ""
        },
        titulo: {
            type: String,
            default: ""
        },
        classCard: {
            type: Array,
            default: () => ["bg-primary"]
        }
    }
}
</script>