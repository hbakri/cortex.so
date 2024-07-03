import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    {
      type: "html",
      value: "GET STARTED",
      className: "sidebar-divider",
    },
    "overview",
    "quickstart",
    {
      type: "category",
      label: "Installation",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        { type: "doc", id: "installation/mac", label: "Mac" },
        { type: "doc", id: "installation/windows", label: "Windows" },
        { type: "doc", id: "installation/linux", label: "Linux" },
      ],
    },
    { type: "doc", id: "requirements", label: "Requirements" },
    // MODELs
    {
      type: "html",
      value: "MODELS",
      className: "sidebar-divider",
    },
    { type: "doc", id: "curated-models", label: "Curated Models" },
    { type: "doc", id: "model-yaml", label: "Model YAML" },
    {
      type: "category",
      label: "Supported Hubs",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        { type: "doc", id: "hub/hugging-face", label: "Hugging Face" },
        { type: "doc", id: "hub/nvidia-ngc", label: "NVIDIA NGC" },
      ],
    },
    // BASIC USAGE
    {
      type: "html",
      value: "BASIC USAGE",
      className: "sidebar-divider",
    },
    { type: "doc", id: "command-line", label: "CLI" },
    { type: "doc", id: "ts-library", label: "Typescript Library" },
    { type: "doc", id: "py-library", label: "Python Library" },
    { type: "doc", id: "server", label: "Server Endpoint" },
    // CAPABILITIES
    {
      type: "html",
      value: "CAPABILITIES",
      className: "sidebar-divider",
    },
    { type: "doc", id: "chat-completions", label: "Chat Completions" },
    { type: "doc", id: "embeddings", label: "Embeddings" },
    { type: "doc", id: "benchmarking", label: "Benchmarking" },
    { type: "doc", id: "model-operations", label: "Model Operations" },
    // ARCHITECTURE
    {
      type: "html",
      value: "ARCHITECTURE",
      className: "sidebar-divider",
    },
    { type: "doc", id: "architecture", label: "Cortex" },
    { type: "doc", id: "cortex-llamacpp", label: "Cortex.llamacpp" },
    { type: "doc", id: "cortex-onnx", label: "Cortex.onnx" },
    { type: "doc", id: "cortex-tensorrt-llm", label: "Cortex.tensorrt-llm" },
    { type: "doc", id: "telemetry", label: "Telemetry" },
  ],
  cli: [
    { type: "doc", id: "cli/cortex", label: "cortex" },
    { type: "doc", id: "cli/init", label: "cortex init" },
    { type: "doc", id: "cli/benchmark", label: "cortex benchmark" },
    { type: "doc", id: "cli/pull", label: "cortex pull" },
    { type: "doc", id: "cli/run", label: "cortex run" },
    {
      type: "category",
      label: "cortex models",
      collapsed: true,
      link: { type: "doc", id: "cli/models/index" },
      items: [
        {
          type: "doc",
          id: "cli/models/download",
          label: "pull",
        },
        {
          type: "doc",
          id: "cli/models/list",
          label: "list",
        },
        {
          type: "doc",
          id: "cli/models/get",
          label: "get",
        },
        {
          type: "doc",
          id: "cli/models/update",
          label: "update",
        },
        {
          type: "doc",
          id: "cli/models/start",
          label: "start",
        },
        {
          type: "doc",
          id: "cli/models/stop",
          label: "stop",
        },
        {
          type: "doc",
          id: "cli/models/remove",
          label: "remove",
        },
      ],
    },
    { type: "doc", id: "cli/embeddings", label: "cortex embeddings" },
    { type: "doc", id: "cli/presets", label: "cortex presets" },
    { type: "doc", id: "cli/ps", label: "cortex ps" },
    { type: "doc", id: "cli/chat", label: "cortex chat" },
    { type: "doc", id: "cli/kill", label: "cortex kill" },
    { type: "doc", id: "cli/serve", label: "cortex serve" },
    { type: "doc", id: "cli/telemetry", label: "cortex telemetry" },
    {
      type: "category",
      label: "cortex engines",
      collapsed: true,
      link: { type: "doc", id: "cli/engines/index" },
      items: [
        {
          type: "doc",
          id: "cli/engines/list",
          label: "list",
        },
        {
          type: "doc",
          id: "cli/engines/get",
          label: "get",
        },
        {
          type: "doc",
          id: "cli/engines/init",
          label: "init",
        },
      ],
    },
    {
      type: "category",
      label: "cortex configs",
      collapsed: true,
      link: { type: "doc", id: "cli/configs/index" },
      items: [
        {
          type: "doc",
          id: "cli/configs/list",
          label: "list",
        },
        {
          type: "doc",
          id: "cli/configs/get",
          label: "get",
        },
        {
          type: "doc",
          id: "cli/configs/set",
          label: "set",
        },
      ],
    },
  ],
};

export default sidebars;
