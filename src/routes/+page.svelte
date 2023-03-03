<script lang="ts">
    import Count from '$lib/Count.svelte';
    import SlotTest from '$lib/SlotTest.svelte';

    let value = 'Hello, world!';
</script>

<h1>Home</h1>

<Count />

<div>
    <input bind:value={value} />
    {value}
</div>

<SlotTest>
    hoge
</SlotTest>
