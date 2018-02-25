/* eslint-disable import/no-unassigned-import, flowtype/require-parameter-type, flowtype/require-return-type, max-statements */
import {test} from "tap"
import "dom-test"

import expand from "./"

test("Single trigger + Single intent + Parameters", ({same, end}) => {
  const element = document.createElement("input")

  element.setAttribute("intents-change-updateformfield-name", "updateFormField")
  element.setAttribute("intents-change-updateformfield-trigger", "change")
  element.setAttribute("intents-change-updateformfield-parameters-field", "query")
  element.setAttribute("intents-change-updateformfield-parameters-form", "search")

  same(
    expand(element.attributes),
    {
      intents: {
        change: {
          updateformfield: {
            name: "updateFormField",
            trigger: "change",
            parameters: {
              field: "query",
              form: "search",
            },
          },
        },
      },
    }
  )
  end()
})

test("Single trigger + Multiple intent + Parameters", ({same, end}) => {
  const element = document.createElement("input")

  element.setAttribute("intents-change-updateformfield-name", "updateFormField")
  element.setAttribute("intents-change-updateformfield-trigger", "change")
  element.setAttribute("intents-change-updateformfield-parameters-field", "query")
  element.setAttribute("intents-change-updateformfield-parameters-form", "search")
  element.setAttribute("intents-change-requestsearch-name", "requestSearch")
  element.setAttribute("intents-change-requestsearch-trigger", "change")
  element.setAttribute("intents-change-requestsearch-parameters-field", "query")
  element.setAttribute("intents-change-requestsearch-parameters-form", "search")

  same(
    expand(element.attributes),
    {
      intents: {
        change: {
          updateformfield: {
            name: "updateFormField",
            trigger: "change",
            parameters: {
              field: "query",
              form: "search",
            },
          },
          requestsearch: {
            name: "requestSearch",
            trigger: "change",
            parameters: {
              field: "query",
              form: "search",
            },
          },
        },
      },
    }
  )
  end()
})

test("Multiple triggers + Single intent + Parameters", ({same, end}) => {
  const element = document.createElement("input")

  element.setAttribute("intents-change-updateformfield-name", "updateFormField")
  element.setAttribute("intents-change-updateformfield-trigger", "change")
  element.setAttribute("intents-change-updateformfield-parameters-field", "query")
  element.setAttribute("intents-change-updateformfield-parameters-form", "search")
  element.setAttribute("intents-hover-updateformfield-name", "updateFormField")
  element.setAttribute("intents-hover-updateformfield-trigger", "hover")
  element.setAttribute("intents-hover-updateformfield-parameters-field", "query")
  element.setAttribute("intents-hover-updateformfield-parameters-form", "search")

  same(
    expand(element.attributes),
    {
      intents: {
        change: {
          updateformfield: {
            name: "updateFormField",
            trigger: "change",
            parameters: {
              field: "query",
              form: "search",
            },
          },
        },
        hover: {
          updateformfield: {
            name: "updateFormField",
            trigger: "hover",
            parameters: {
              field: "query",
              form: "search",
            },
          },
        },
      },
    }
  )
  end()
})
