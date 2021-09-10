// import { NewGravatar, UpdatedGravatar } from '../generated/Token/Token'
// import { Gravatar } from '../generated/schema'

// export function handleNewGravatar(event: NewGravatar): void {
//   let gravatar = new Gravatar(event.params.id.toHex())
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }

// export function handleUpdatedGravatar(event: UpdatedGravatar): void {
//   let id = event.params.id.toHex()
//   let gravatar = Gravatar.load(id)
//   if (gravatar == null) {
//     gravatar = new Gravatar(id)
//   }
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }



import { Transfer } from '../generated/NFTMiner/ERC721'

import { Token } from '../generated/schema'

export function handleTransfer(event: Transfer): void {
    let tokenID = event.params.tokenId.toHex()
    let token = new Token(tokenID)
    token.currentOwner = event.params.to

    token.save()
}