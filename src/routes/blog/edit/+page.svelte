<script lang="ts">
    import Markdown from 'svelte-exmarkdown';
    import {gfmPlugin} from 'svelte-exmarkdown/gfm';
    import Mermaid from '$lib/Mermaid.svelte';

    let md = '';
</script>

<textarea id="md-editor" bind:value={md} />

<Markdown {md} plugins={[gfmPlugin]} />

<Mermaid>
    flowchart TD
        A --> B
        A --> C
        B --> D
        C --> D
</Mermaid>

<Mermaid>
{`classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }`}
</Mermaid>

<Mermaid>
    stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
</Mermaid>

<style lang="sass">
    #md-editor
        width: 50%
        height: 100%
</style>
