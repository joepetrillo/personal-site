const TABLE_SCROLL_CLASS = "prose-table-scroll";

interface HastNode {
  children?: HastNode[];
  properties?: Record<string, unknown>;
  tagName?: string;
  type?: string;
}

const wrapMarkdownTables = (node: HastNode): void => {
  if (!Array.isArray(node.children)) {
    return;
  }

  node.children = node.children.map((child) => {
    if (child.type === "element" && child.tagName === "table") {
      return {
        children: [child],
        properties: { className: [TABLE_SCROLL_CLASS] },
        tagName: "div",
        type: "element",
      };
    }

    wrapMarkdownTables(child);
    return child;
  });
};

export const rehypeWrapTables = () => wrapMarkdownTables;
