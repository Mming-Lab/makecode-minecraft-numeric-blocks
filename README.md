
# Numeric Block

[English](README.md) | [日本語](README_ja.md)

A MakeCode extension for Minecraft that provides numeric block functionality. This extension allows agents to inspect blocks and return numeric values (0-9) based on different colored wool blocks.

> Open this page at [https://mming-lab.github.io/numericblock/](https://mming-lab.github.io/numericblock/)

## Features

- **Numeric Block Inspection**: Agents can inspect blocks in specified directions and get numeric values
- **Wool Block Mapping**: Different colored wool blocks represent numbers 0-9
  - Based on resistor color codes for easy memorization
  - Black Wool = 0
  - Brown Wool = 1
  - Red Wool = 2
  - Orange Wool = 3
  - Yellow Wool = 4
  - Green Wool = 5
  - Blue Wool = 6
  - Purple Wool = 7
  - Gray Wool = 8
  - White Wool = 9

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* Open [https://minecraft.makecode.com/](https://minecraft.makecode.com/)
* Click on **New Project**
* Click on **Extensions** under the gear button menu
* Search for **https://github.com/mming-lab/numericblock** and import

## Edit this project

To edit this repository in MakeCode:

* Open [https://minecraft.makecode.com/](https://minecraft.makecode.com/)
* Click on **Import** then click on **Import URL**
* Paste **https://github.com/mming-lab/numericblock** and click import

## Usage

Use the `agent numeric inspect` block to inspect blocks in any direction and get their numeric values.

## License

MIT License - see [LICENSE](LICENSE) file for details.

#### Metadata (used for search, rendering)

* for PXT/minecraft
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
