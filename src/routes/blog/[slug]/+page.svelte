<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1>{data.title}</h1>

<div>
    Date: {data.date}
</div>

<div>
    <span>Tags</span>
    <ul>
        {#each data.tags as tag}
            <li>{tag}</li>
        {/each}
    </ul>
</div>

<svelte:component this={data.content} />
