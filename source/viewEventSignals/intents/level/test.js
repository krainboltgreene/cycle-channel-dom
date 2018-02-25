/* eslint-disable  flowtype/require-parameter-type, flowtype/require-return-type, max-statements */
import {test} from "tap"

import level from "./"

test("Single trigger", ({same, end}) => {
  same(
    level({
      change: {
        updateformfield: {
          name: "updateFormField",
          parameters: {
            form: "search",
            field: "query",
          },
        },
      },
    }),
    [
      {
        name: "updateFormField",
        parameters: {
          form: "search",
          field: "query",
        },
      },
    ]
  )
  end()
})

test("Single multiple same", ({same, end}) => {
  same(
    level({
      change: {
        updateformfield: {
          name: "updateFormField",
          parameters: {
            form: "search",
            field: "query",
          },
        },
        requestsearch: {
          name: "requestsearch",
          parameters: {query: "hello"},
        },
      },
    }),
    [
      {
        name: "updateFormField",
        parameters: {
          form: "search",
          field: "query",
        },
      },
      {
        name: "requestsearch",
        parameters: {query: "hello"},
      },
    ]
  )
  end()
})
