import mapValues from "@unction/mapvalues"
import values from "@unction/values"
import flatten from "@unction/flatten"

import type {TriggerTreeType} from "types"
import type {IntentType} from "types"

export default function level (triggers: TriggerTreeType): Array<IntentType> {
  return flatten(mapValues(values)(values(triggers)))
}
