package shared

type Party struct {
	Abbreviation          *string `json:"abbreviation"`
	BackgroundColour      *string `json:"backgroundColour"`
	ForegroundColour      *string `json:"foregroundColour"`
	GovernmentType        *int32  `json:"governmentType"`
	ID                    *int32  `json:"id"`
	IsIndependentParty    *bool   `json:"isIndependentParty"`
	IsLordsMainParty      *bool   `json:"isLordsMainParty"`
	IsLordsSpiritualParty *bool   `json:"isLordsSpiritualParty"`
	Name                  *string `json:"name"`
}
