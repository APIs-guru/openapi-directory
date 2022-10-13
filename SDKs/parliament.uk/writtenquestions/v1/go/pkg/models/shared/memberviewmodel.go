package shared

type MemberViewModel struct {
	ID                *int32  `json:"id"`
	ListAs            *string `json:"listAs"`
	MemberFrom        *string `json:"memberFrom"`
	Name              *string `json:"name"`
	Party             *string `json:"party"`
	PartyAbbreviation *string `json:"partyAbbreviation"`
	PartyColour       *string `json:"partyColour"`
	ThumbnailURL      *string `json:"thumbnailUrl"`
}
