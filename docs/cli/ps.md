---
title: Cortex Ps
description: Cortex ps command.
slug: "ps"
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex ps`
:::info
This CLI command calls the following API endpoint:
- [Get Model Status](/api-reference#tag/events/get/v1/events/model)
:::
This command shows the running model and its status.



## Usage

```bash
cortex ps
```

For example, it returns the following table:

```bash
√ Dependencies loaded in 2882ms
√ Getting models...
√ Running PS command...
┌─────────┬──────────────────────┬───────────────────┬───────────┬──────────┬─────┬──────┐
│ (index) │ modelId              │ engine            │ status    │ duration │ ram │ vram │
├─────────┼──────────────────────┼───────────────────┼───────────┼──────────┼─────┼──────┤
│ 0       │ 'janhq/tinyllama/1b' │ 'cortex.llamacpp' │ 'running' │ '7s'     │ '-' │ '-'  │
└─────────┴──────────────────────┴───────────────────┴───────────┴──────────┴─────┴──────┘
√ API server is offline
## The ps command also provides information on the percentage of system resources being used.
┌─────────┬───────────┬──────────────┬────────────────────────┐
│ (index) │ CPU Usage │ Memory Usage │ VRAM                   │
├─────────┼───────────┼──────────────┼────────────────────────┤
│ 0       │ '4.13%'   │ '83.11%'     │                        │
│ 1       │           │              │ [ [Object], [Object] ] │
└─────────┴───────────┴──────────────┴────────────────────────┘
```
## Options

| Option            | Description                                           | Required | Default value | Example     |
|-------------------|-------------------------------------------------------|----------|---------------|-------------|
| `-h`, `--help`      | Display help information for the command.             | No       | -             | `-h`    |