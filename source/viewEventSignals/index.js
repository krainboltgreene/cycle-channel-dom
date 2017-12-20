import mapValues from "@unction/mapvalues"
import domEventsMany from "@unction/domeventsmany"
import pipe from "@unction/pipe"
import keyChain from "@unction/keychain"

import asSignal from "./asSignal"

import type {Stream} from "types"
import type {SignalType} from "types"

export default function viewEventSignals (view: Stream<mixed>): Stream<SignalType> {
  return mapValues(
    pipe([keyChain(["target", "attributes"]), asSignal])
  )(
    domEventsMany(
      {}
    )([
      "click",
      "hover",
      "change",
      "submit",
    ])(
      view
    )
  )
}
