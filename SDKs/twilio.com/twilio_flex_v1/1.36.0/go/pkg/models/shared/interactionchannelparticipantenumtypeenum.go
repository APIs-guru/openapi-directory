package shared

type InteractionChannelParticipantEnumTypeEnum string

const (
	InteractionChannelParticipantEnumTypeEnumSupervisor InteractionChannelParticipantEnumTypeEnum = "supervisor"
	InteractionChannelParticipantEnumTypeEnumCustomer   InteractionChannelParticipantEnumTypeEnum = "customer"
	InteractionChannelParticipantEnumTypeEnumExternal   InteractionChannelParticipantEnumTypeEnum = "external"
	InteractionChannelParticipantEnumTypeEnumAgent      InteractionChannelParticipantEnumTypeEnum = "agent"
	InteractionChannelParticipantEnumTypeEnumUnknown    InteractionChannelParticipantEnumTypeEnum = "unknown"
)
