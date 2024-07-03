import type { Node, PluginObj } from '@babel/core'
import * as t from '@babel/types'

export default function ({ types: tt }: { types: typeof t }): PluginObj {
  return {
    visitor: {
      CallExpression(path, { opts }) {
        const callee = path.node.callee
        const { callChains = [] } = opts as Record<string, any>
        const [obj, ...fns] = callChains

        if (tt.isIdentifier(callee, { name: obj })) {
          path.remove()
        }
        // 最后一层调用函数
        const isCallName = tt.isMemberExpression(callee) && tt.isIdentifier(callee.property) && fns.includes(callee.property.name)
        // 找到第一层调用 identifier 调用者
        if (isIdentifierRecursive(callee, obj) && isCallName) {
          path.remove()
        }
      },
    },
  }
}

function isIdentifierRecursive(node: Node, name: string) {
  if (!node)
    return false
  if (t.isIdentifier(node, { name })) {
    return true
  }
  else if (t.isMemberExpression(node)) {
    return isIdentifierRecursive(node.object, name)
  }
  else if (t.isCallExpression(node)) {
    return isIdentifierRecursive(node.callee, name)
  }
  else {
    return false
  }
}
