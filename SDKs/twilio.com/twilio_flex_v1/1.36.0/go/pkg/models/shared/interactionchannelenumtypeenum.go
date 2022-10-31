package shared

type InteractionChannelEnumTypeEnum string

const (
	InteractionChannelEnumTypeEnumVoice     InteractionChannelEnumTypeEnum = "voice"
	InteractionChannelEnumTypeEnumSms       InteractionChannelEnumTypeEnum = "sms"
	InteractionChannelEnumTypeEnumEmail     InteractionChannelEnumTypeEnum = "email"
	InteractionChannelEnumTypeEnumWeb       InteractionChannelEnumTypeEnum = "web"
	InteractionChannelEnumTypeEnumWhatsapp  InteractionChannelEnumTypeEnum = "whatsapp"
	InteractionChannelEnumTypeEnumChat      InteractionChannelEnumTypeEnum = "chat"
	InteractionChannelEnumTypeEnumMessenger InteractionChannelEnumTypeEnum = "messenger"
	InteractionChannelEnumTypeEnumGbm       InteractionChannelEnumTypeEnum = "gbm"
)
