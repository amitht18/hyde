export function replaceWords(node: HTMLElement) {
  console.log('replacing')
  node.innerHTML = node.innerHTML.replace(/React/g, 'Angular');
}