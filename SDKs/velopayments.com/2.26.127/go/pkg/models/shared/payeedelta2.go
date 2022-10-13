package shared

type PayeeDelta2 struct {
	DbaName         *string               `json:"dbaName"`
	DisplayName     *string               `json:"displayName"`
	Email           *string               `json:"email"`
	OnboardedStatus *OnboardedStatus2Enum `json:"onboardedStatus"`
	PayeeCountry    *string               `json:"payeeCountry"`
	PayeeID         string                `json:"payeeId"`
	RemoteID        string                `json:"remoteId"`
}
