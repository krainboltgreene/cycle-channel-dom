export type StreamType<T>= {}
export type NamedNodeMapType = {}
export type EventType = {target?: {attributes: mixed}, type: string}
export type ParameterType = {[name: string]: mixed}
export type PayloadType = {event?: EventType} & ParameterType
export type IntentType = {trigger: string, name: string, parameters: ParameterType}
export type DefinitionTreeType = {[normalizedName: string]: IntentType}
export type TriggerTreeType = {[trigger: string]: DefinitionTreeType}
export type IntentsTreeType = {intents: TriggerTreeType}
export type SignalType = {name: string, payload: PayloadType}
export type SignalsType = StreamType<SignalType>
export type ObjectTreeType = {[name: string]: ObjectTreeType}
export type DataTreeType = {data: IntentsTreeType}
