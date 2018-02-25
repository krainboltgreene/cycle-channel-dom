import keyChain from "@unction/keychain"

import level from "./level"
import expand from "./expand"

import type {EventType} from "types"
import type {IntentType} from "types"

export default function intents (event: EventType): Array<IntentType> {
  return level(
    keyChain(
      ["data", "intents"]
    )(
      expand(
        keyChain(
          ["target", "attributes"]
        )(
          event
        )
      )
    )
  )
}
