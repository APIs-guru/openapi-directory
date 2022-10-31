package shared

type Party struct {
	Abbreviation          *string `json:"abbreviation,omitempty"`
	BackgroundColour      *string `json:"backgroundColour,omitempty"`
	ForegroundColour      *string `json:"foregroundColour,omitempty"`
	GovernmentType        *int32  `json:"governmentType,omitempty"`
	ID                    *int32  `json:"id,omitempty"`
	IsIndependentParty    *bool   `json:"isIndependentParty,omitempty"`
	IsLordsMainParty      *bool   `json:"isLordsMainParty,omitempty"`
	IsLordsSpiritualParty *bool   `json:"isLordsSpiritualParty,omitempty"`
	Name                  *string `json:"name,omitempty"`
}
