import mapValues from "@unction/mapvalues"
import {from} from "most"

import type {StreamType} from "types"
import type {IntentType} from "types"
import type {SignalType} from "types"
import type {EventType} from "types"

export default function signalize (event: EventType): Function {
  return function signalizeEvent (intents: Array<IntentType>): StreamType<SignalType> {
    return from(
      mapValues(
        ({name, parameters}: IntentType): SignalType => {
          return {
            name,
            payload: {
              event,
              ...parameters,
            },
          }
        }
      )(
        intents
      )
    )
  }
}
