const COPY_HEADING_LINK_CLASS = "copy-heading-link";
const COPY_HEADING_TEXT_CLASS = "copy-heading-link__text";
const HEADING_TAGS = new Set(["h2", "h3", "h4", "h5", "h6"]);

interface HastNode {
  children?: HastNode[];
  properties?: Record<string, unknown>;
  tagName?: string;
  type?: string;
  value?: string;
}

const isElement = (node: HastNode): boolean => node.type === "element";

const hasClass = (node: HastNode, className: string): boolean => {
  const classes = node.properties?.className;

  return Array.isArray(classes) && classes.includes(className);
};

const getNodeText = (node: HastNode): string => {
  if (node.type === "text") {
    return node.value ?? "";
  }

  if (!Array.isArray(node.children)) {
    return "";
  }

  return node.children.map(getNodeText).join("");
};

const createLinkIcon = (): HastNode => ({
  children: [
    {
      properties: {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      },
      tagName: "path",
      type: "element",
    },
    {
      properties: {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      },
      tagName: "path",
      type: "element",
    },
  ],
  properties: {
    ariaHidden: "true",
    fill: "none",
    focusable: "false",
    height: 18,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    width: 18,
    xmlns: "http://www.w3.org/2000/svg",
  },
  tagName: "svg",
  type: "element",
});

const createCopyButton = (headingText: string): HastNode => ({
  children: [createLinkIcon()],
  properties: {
    ariaLabel: `Copy link to section: ${headingText}`,
    className: [COPY_HEADING_LINK_CLASS],
    dataState: "idle",
    type: "button",
  },
  tagName: "button",
  type: "element",
});

const wrapCopyHeading = (node: HastNode): void => {
  const headingText = getNodeText(node).trim() || "section";
  const children = node.children ?? [];

  node.children = [
    {
      children,
      properties: { className: [COPY_HEADING_TEXT_CLASS] },
      tagName: "span",
      type: "element",
    },
    createCopyButton(headingText),
  ];
};

const addCopyHeadingLinks = (node: HastNode): void => {
  if (!Array.isArray(node.children)) {
    return;
  }

  for (const child of node.children) {
    if (
      isElement(child) &&
      child.tagName &&
      HEADING_TAGS.has(child.tagName) &&
      !hasClass(child, "sr-only")
    ) {
      wrapCopyHeading(child);
      continue;
    }

    addCopyHeadingLinks(child);
  }
};

export const rehypeCopyHeadingLinks = () => addCopyHeadingLinks;
