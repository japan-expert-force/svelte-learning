<script lang="ts">
    import Count from '$lib/Count.svelte';
    import SlotTest from '$lib/SlotTest.svelte';

    let value = 'Hello, world!';
</script>

<main>
    <h1>Home</h1>

    <Count />

    <div>
        <input bind:value={value} />
        {value}
    </div>

    <SlotTest>
        hoge
    </SlotTest>
</main>

<style lang="sass">
    main
        background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)
</style>
