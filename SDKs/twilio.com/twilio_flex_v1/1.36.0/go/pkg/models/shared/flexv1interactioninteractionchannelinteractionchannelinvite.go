package shared

type FlexV1InteractionInteractionChannelInteractionChannelInvite struct {
	ChannelSid     *string      `json:"channel_sid"`
	InteractionSid *string      `json:"interaction_sid"`
	Routing        *interface{} `json:"routing"`
	Sid            *string      `json:"sid"`
	URL            *string      `json:"url"`
}
