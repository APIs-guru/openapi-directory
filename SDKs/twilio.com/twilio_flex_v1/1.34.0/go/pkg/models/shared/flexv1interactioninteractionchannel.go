package shared

type FlexV1InteractionInteractionChannel struct {
	ErrorCode      *int64                                   `json:"error_code"`
	ErrorMessage   *string                                  `json:"error_message"`
	InteractionSid *string                                  `json:"interaction_sid"`
	Links          map[string]interface{}                   `json:"links"`
	Sid            *string                                  `json:"sid"`
	Status         *InteractionChannelEnumChannelStatusEnum `json:"status"`
	Type           *InteractionChannelEnumTypeEnum          `json:"type"`
	URL            *string                                  `json:"url"`
}
