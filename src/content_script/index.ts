import { replaceWords } from "./replace-string";

export function ContentScript() {
  // replaceWords();
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        console.log('This mutation', node);
        const typeNode = node as HTMLElement;
        if (typeNode.tagName !== 'SCRIPT' && typeNode.innerHTML) {
          if (typeNode.innerHTML.includes('React')) {
            replaceWords(typeNode)
          }
        }
      })
    })
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });
}

window.addEventListener('load', ContentScript);
