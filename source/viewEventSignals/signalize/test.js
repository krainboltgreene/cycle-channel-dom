/* eslint-disable  flowtype/require-parameter-type, flowtype/require-return-type, max-statements */
import {test} from "tap"
import streamSatisfies from "@unction/streamsatisfies"

import signalize from "./"

test("Single intent", ({same, equal, doesNotThrow, end}) => {
  streamSatisfies(
    [
      {
        name: "updateFormField",
        payload: {
          event: {key: "value"},
          field: "query",
          form: "search",
        },
      },
    ]
  )(
    (given) => (expected) => same(given, expected)
  )(
    doesNotThrow
  )(
    ({length}) => (size) => {
      equal(length, size)

      end()
    }
  )(
    signalize(
      {key: "value"},
    )([
      {
        name: "updateFormField",
        trigger: "change",
        parameters: {
          field: "query",
          form: "search",
        },
      },
    ])
  )
})
