const immute = object => {
  if (object === window) return

  const freezeChild = (pendingNodes, node) => {
    const isSubjectNode = element => element === node

    const currentIndex = pendingNodes.length - 1
    const previousIndex = pendingNodes.findIndex(isSubjectNode)
    const isEarlierNode = previousIndex !== -1 && previousIndex < currentIndex

    if (isEarlierNode) return
    
    const canImmute = element => typeof element === 'object' && element !== null

    Object.getOwnPropertyNames(node)
      .map(property => node[property])
      .filter(canImmute)
      .forEach(childNode => freezeChild(pendingNodes.concat(childNode), childNode))

    return Object.freeze(node)
  }

  return freezeChild([], object)
}
