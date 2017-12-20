import inflateTree from "@unction/inflatetree"
import reduceValues from "@unction/reducevalues"
import mergeDeepRight from "@unction/mergedeepright"
import recordFromEntity from "@unction/recordfromentity"
import mapValues from "@unction/mapvalues"

import type {SignalType} from "types"
import type {ObjectTreeType} from "types"

export default function asSignal (attributes: NamedNodeMap): SignalType {
  return reduceValues(
    (accumulated: ObjectTreeType | {[name: string]: string}): Function =>
      (value: mixed): ObjectTreeType => {
        return mergeDeepRight(accumulated)(inflateTree("-")(value))
      }
  )(
    {}
  )(
    mapValues(
      recordFromEntity(["name"])(["value"])
    )(
      [...attributes]
    )
  )
}
