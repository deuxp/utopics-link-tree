// imports must have .js extention included in path
import { links } from "../db/data.js";
import { createNewNode, createUnorderedList } from "../helpers/helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  const ROOT = document.querySelector("#root");

  const header = createNewNode("h1", "header", "Welcome");
  ROOT.appendChild(header);

  const ul = createUnorderedList(links, "list");
  ROOT.appendChild(ul);
});
