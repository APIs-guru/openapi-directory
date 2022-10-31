package shared

type FlexV1InteractionInteractionChannelInteractionChannelParticipant struct {
	ChannelSid     *string                                    `json:"channel_sid,omitempty"`
	InteractionSid *string                                    `json:"interaction_sid,omitempty"`
	Sid            *string                                    `json:"sid,omitempty"`
	Type           *InteractionChannelParticipantEnumTypeEnum `json:"type,omitempty"`
	URL            *string                                    `json:"url,omitempty"`
}
