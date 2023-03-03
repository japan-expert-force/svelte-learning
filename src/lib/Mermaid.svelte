<script lang="ts">
    import { onMount } from 'svelte';

    import mermaid from 'mermaid';

    onMount(() => mermaid.initialize({ startOnLoad: true }));

    const run = () => mermaid.run();
    onMount(run);
</script>

<div class=mermaid on:change={run}>
    <slot />
</div>
