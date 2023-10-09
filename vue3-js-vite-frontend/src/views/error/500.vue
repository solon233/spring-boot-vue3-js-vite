<script setup>
const props = defineProps({
    message: { type: String, required: false, default: "サーバエラーが発生しました" },
    stack: { type: String, required: false, default: "stacktrace001" }
})
</script>
<template>
    <div>
        <div class="p-1 m-1 border bg-secondary text-light">
            <h1>500 InternalError</h1>
        </div>
        <div class="row p-2">
            <div class="col">
                <div class="text-danger">{{ props.message }}</div>
            </div>
        </div>
        <div class="row px-2">
            <div class="col">
                {{ props.stack }}
            </div>
        </div>
    </div>
</template>