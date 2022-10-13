package shared

type MemberForDate struct {
	Constituency *string `json:"Constituency"`
	ListAs       *string `json:"ListAs"`
	MnisID       *int32  `json:"MnisId"`
	Name         *string `json:"Name"`
	Party        *string `json:"Party"`
	PartyColour  *string `json:"PartyColour"`
	PartyID      *int32  `json:"PartyId"`
	PhotoURL     *string `json:"PhotoUrl"`
	PimsID       *int32  `json:"PimsId"`
	Status       *string `json:"Status"`
}
