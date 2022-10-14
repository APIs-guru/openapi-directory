package shared

type FlexV1InteractionInteractionChannel struct {
	ErrorCode      *int64                                   `json:"error_code,omitempty"`
	ErrorMessage   *string                                  `json:"error_message,omitempty"`
	InteractionSid *string                                  `json:"interaction_sid,omitempty"`
	Links          map[string]interface{}                   `json:"links,omitempty"`
	Sid            *string                                  `json:"sid,omitempty"`
	Status         *InteractionChannelEnumChannelStatusEnum `json:"status,omitempty"`
	Type           *InteractionChannelEnumTypeEnum          `json:"type,omitempty"`
	URL            *string                                  `json:"url,omitempty"`
}
