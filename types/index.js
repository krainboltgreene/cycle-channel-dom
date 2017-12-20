export type Stream<T>= {}
export type EventType = {target?: {attributes: mixed}, type: string}
export type ParameterType = {[name: string]: mixed}
export type PayloadType = {event?: EventType} & ParameterType
export type IntentType = {trigger: string, name: Array<string>, parameters: ParameterType}
export type SignalType = {name: string, payload: PayloadType}
export type SignalsType = Stream<SignalType>
export type ObjectTreeType = {[name: string]: ObjectTreeType}
