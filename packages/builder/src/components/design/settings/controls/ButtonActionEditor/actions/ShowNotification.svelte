<script>
  import { Select, Label, Checkbox, IconPicker } from "@budibase/bbui"
  import { onMount } from "svelte"
  import DrawerBindableInput from "components/common/bindings/DrawerBindableInput.svelte"

  export let parameters
  export let bindings = []

  const typeOptions = [
    {
      label: "Success",
      value: "success",
    },
    {
      label: "Error",
      value: "error",
    },
    {
      label: "Info",
      value: "info",
    },
    {
      label: "Warning",
      value: "warning",
    },
  ]

  onMount(() => {
    if (!parameters.type) {
      parameters.type = "warning"
    }
    if (!parameters.defaultIcon) {
      parameters.defaultIcon = true
    }
    if (!parameters.autoDismiss) {
      parameters.autoDismiss = true
    }
  })
</script>

<div class="root">
  <Label small>Message</Label>
  <DrawerBindableInput
    {bindings}
    value={parameters.message}
    on:change={e => (parameters.message = e.detail)}
  />
  <Label small>Type</Label>
  <Select
    placeholder={null}
    bind:value={parameters.type}
    options={typeOptions}
  />
  <Label small />
  <Checkbox text="Use Default Icon" bind:value={parameters.defaultIcon} />
  <Label small />
  <Checkbox text="Auto Dismiss" bind:value={parameters.autoDismiss} />
  {#if parameters.defaultIcon === false}
    <Label small>Icon</Label>
    <IconPicker
      bind:value={parameters.icon}
      on:change={e => (parameters.icon = e.detail)}
    />
  {/if}
</div>

<style>
  .root {
    display: grid;
    column-gap: var(--spacing-xs);
    row-gap: var(--spacing-s);
    grid-template-columns: 90px 1fr;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
  }
</style>
