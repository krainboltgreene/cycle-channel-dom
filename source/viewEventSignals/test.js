/* eslint-disable  flowtype/require-parameter-type, flowtype/require-return-type, max-statements */
import {test} from "tap"
import {of} from "most"
import {empty} from "most"
import streamSatisfies from "@unction/streamsatisfies"

import viewEventSignals from "./"

test(({same, equal, doesNotThrow, end}) => {
  const dom = {
    events: (name) => {
      if (name === "change") {
        return of({
          target: {
            attributes: [
              {
                name: "data-intents-change-updateformfield-name",
                value: "updateFormField",
              },
              {
                name: "data-intents-change-updateformfield-trigger",
                value: "change",
              },
              {
                name: "data-intents-change-updateformfield-parameters-field",
                value: "query",
              },
              {
                name: "data-intents-change-updateformfield-parameters-form",
                value: "search",
              },
            ],
          },
        })
      }

      return empty()
    },
  }

  streamSatisfies(
    [
      {
        name: "updateFormField",
        payload: {
          form: "search",
          field: "query",
          event: {
            target: {
              attributes: [
                {
                  name: "data-intents-change-updateformfield-name",
                  value: "updateFormField",
                },
                {
                  name: "data-intents-change-updateformfield-trigger",
                  value: "change",
                },
                {
                  name: "data-intents-change-updateformfield-parameters-field",
                  value: "query",
                },
                {
                  name: "data-intents-change-updateformfield-parameters-form",
                  value: "search",
                },
              ],
            },
          },
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
    viewEventSignals(dom)
  )
})
