package shared

type TflAPIPresentationEntitiesMode struct {
	IsFarePaying       *bool   `json:"isFarePaying,omitempty"`
	IsScheduledService *bool   `json:"isScheduledService,omitempty"`
	IsTflService       *bool   `json:"isTflService,omitempty"`
	ModeName           *string `json:"modeName,omitempty"`
}
