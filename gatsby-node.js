/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */



exports.onCreateNode = ({ node, getNode, actions }) => {


   const { createNode } = actions

  // News Nodes
  if (node.internal.type === `newse`) {
  
    createNode({
      id: `md-${node.id}`,
      parent: node.id,
      children: [],
      internal: {
        type: `${node.internal.type}Markdown`,
        mediaType: `text/markdown`,
        content: `---\ntitle: ${node.title}\nstatus: ${node.status}\ndate: ${node.updatedAt}\n---\n${node.bodyText}`,
        contentDigest: node.internal.contentDigest
      }
    });  
  }
}

