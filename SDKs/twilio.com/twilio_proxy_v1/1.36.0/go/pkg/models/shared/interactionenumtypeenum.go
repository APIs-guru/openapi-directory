package shared

type InteractionEnumTypeEnum string

const (
	InteractionEnumTypeEnumMessage InteractionEnumTypeEnum = "message"
	InteractionEnumTypeEnumVoice   InteractionEnumTypeEnum = "voice"
	InteractionEnumTypeEnumUnknown InteractionEnumTypeEnum = "unknown"
)
