import mapValues from "@unction/mapvalues"
import domEventsMany from "@unction/domeventsmany"
import flatten from "@unction/flatten"

import intents from "./intents"
import signalize from "./signalize"

import type {StreamType} from "types"
import type {SignalType} from "types"
import type {EventType} from "types"

export default function viewEventSignals (view: StreamType<mixed>): StreamType<SignalType> {
  return flatten(
    mapValues(
      (event: EventType): StreamType<SignalType> =>
        signalize(event)(intents(event))
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
  )
}
