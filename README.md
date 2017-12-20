# cycle-channel-dom

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

Takes in DOM streams, like events, and turns them into Signals for cycle-channel.


## Usage

``` javascript
import {viewEventSignals} from "cycle-channel-dom"

const application = ({view, network, storage}) => {
  return channel({
    signals: [
      viewEventSignals(view),
    ],
  ...
  })
})
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/cycle-channel.svg?maxAge=2592000&style=flat-square-dom
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/cycle-channel.svg?maxAge=2592000&style=flat-square-dom
