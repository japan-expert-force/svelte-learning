<script lang="ts">
    let count = 0;

    function onClick() {
        count++;
    }
</script>

<button on:click={onClick}>クリック数: {count}</button>
