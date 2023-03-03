<script lang="ts">
    let count = 0;

    function onClick() {
        count++;
    }

    let value = 'Hello, world!';
</script>

<h1>Home</h1>

<button on:click={onClick}>クリック数: {count}</button>

<div>
    <input bind:value={value} />
    {value}
</div>

<style lang="sass">
    :global(body)
        color: white
        background: linear-gradient(to right,rgb(223,95,255),rgb(78,124,255))
</style>
