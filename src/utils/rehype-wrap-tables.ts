import type { Element, Root } from "hast";

const TABLE_SCROLL_CLASS = "prose-table-scroll";

const wrapElement = (node: Element) => {
  node.children = node.children.map((child) => {
    if (child.type !== "element") {
      return child;
    }

    if (child.tagName === "table") {
      return {
        children: [child],
        properties: { className: [TABLE_SCROLL_CLASS] },
        tagName: "div",
        type: "element",
      } satisfies Element;
    }

    wrapElement(child);

    return child;
  });
};

const wrapMarkdownTables = (node: Root) => {
  node.children = node.children.map((child) => {
    if (child.type !== "element") {
      return child;
    }

    if (child.tagName === "table") {
      return {
        children: [child],
        properties: { className: [TABLE_SCROLL_CLASS] },
        tagName: "div",
        type: "element",
      } satisfies Element;
    }

    wrapElement(child);

    return child;
  });
};

export const rehypeWrapTables = () => wrapMarkdownTables;
