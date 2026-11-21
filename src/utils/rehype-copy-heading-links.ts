import type { Element, ElementContent, Root, RootContent, Text } from "hast";

const COPY_HEADING_LINK_CLASS = "copy-heading-link";
const COPY_HEADING_TEXT_CLASS = "copy-heading-link__text";
const HEADING_TAGS = new Set(["h2", "h3", "h4", "h5", "h6"]);

const isElement = (
  node: Root | RootContent | ElementContent
): node is Element => node.type === "element";

const isText = (node: Root | RootContent | ElementContent): node is Text =>
  node.type === "text";

const hasClass = (node: Element, className: string) => {
  const classes = node.properties.className;

  return Array.isArray(classes) && classes.includes(className);
};

const getNodeText = (node: Root | Element) => {
  const parts: string[] = [];
  const stack: (Root | RootContent | ElementContent)[] = [node];

  while (stack.length > 0) {
    const current = stack.pop();

    if (!current) {
      continue;
    }

    if (isText(current)) {
      parts.push(current.value);
      continue;
    }

    if (current.type !== "element" && current.type !== "root") {
      continue;
    }

    for (let index = current.children.length - 1; index >= 0; index -= 1) {
      const child = current.children[index];

      if (child) {
        stack.push(child);
      }
    }
  }

  return parts.join("");
};

const createLinkIcon = () =>
  ({
    children: [
      {
        children: [],
        properties: {
          d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
        },
        tagName: "path",
        type: "element",
      },
      {
        children: [],
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
      strokeWidth: "2",
      viewBox: "0 0 24 24",
      width: 18,
      xmlns: "http://www.w3.org/2000/svg",
    },
    tagName: "svg",
    type: "element",
  }) satisfies Element;

const createCopyButton = (headingText: string) =>
  ({
    children: [createLinkIcon()],
    properties: {
      ariaLabel: `Copy link to section: ${headingText}`,
      className: [COPY_HEADING_LINK_CLASS],
      dataState: "idle",
      type: "button",
    },
    tagName: "button",
    type: "element",
  }) satisfies Element;

const wrapCopyHeading = (node: Element) => {
  const headingText = getNodeText(node).trim() || "section";
  const { children } = node;

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

const addCopyHeadingLinks = (node: Root | Element) => {
  for (const child of node.children) {
    if (!isElement(child)) {
      continue;
    }

    if (HEADING_TAGS.has(child.tagName) && !hasClass(child, "sr-only")) {
      wrapCopyHeading(child);
      continue;
    }

    addCopyHeadingLinks(child);
  }
};

export const rehypeCopyHeadingLinks = () => addCopyHeadingLinks;
