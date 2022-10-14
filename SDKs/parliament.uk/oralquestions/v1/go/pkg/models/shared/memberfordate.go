package shared

type MemberForDate struct {
	Constituency *string `json:"Constituency,omitempty"`
	ListAs       *string `json:"ListAs,omitempty"`
	MnisID       *int32  `json:"MnisId,omitempty"`
	Name         *string `json:"Name,omitempty"`
	Party        *string `json:"Party,omitempty"`
	PartyColour  *string `json:"PartyColour,omitempty"`
	PartyID      *int32  `json:"PartyId,omitempty"`
	PhotoURL     *string `json:"PhotoUrl,omitempty"`
	PimsID       *int32  `json:"PimsId,omitempty"`
	Status       *string `json:"Status,omitempty"`
}
