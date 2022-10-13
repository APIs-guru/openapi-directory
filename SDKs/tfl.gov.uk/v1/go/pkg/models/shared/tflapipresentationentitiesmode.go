package shared

type TflAPIPresentationEntitiesMode struct {
	IsFarePaying       *bool   `json:"isFarePaying"`
	IsScheduledService *bool   `json:"isScheduledService"`
	IsTflService       *bool   `json:"isTflService"`
	ModeName           *string `json:"modeName"`
}
