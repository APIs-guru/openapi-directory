package shared

type FlexV1InteractionInteractionChannelInteractionChannelParticipant struct {
	ChannelSid     *string                                    `json:"channel_sid"`
	InteractionSid *string                                    `json:"interaction_sid"`
	Sid            *string                                    `json:"sid"`
	Type           *InteractionChannelParticipantEnumTypeEnum `json:"type"`
	URL            *string                                    `json:"url"`
}
