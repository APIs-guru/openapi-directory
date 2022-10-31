package shared



type PayeeDelta struct {
    DbaName *string `json:"dbaName,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Email *string `json:"email,omitempty"`
    OnboardedStatus *OnboardedStatus2Enum `json:"onboardedStatus,omitempty"`
    PayeeCountry *string `json:"payeeCountry,omitempty"`
    PayeeID string `json:"payeeId"`
    RemoteID string `json:"remoteId"`
    
}

