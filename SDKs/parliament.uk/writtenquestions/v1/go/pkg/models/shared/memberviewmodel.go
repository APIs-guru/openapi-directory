package shared



type MemberViewModel struct {
    ID *int32 `json:"id,omitempty"`
    ListAs *string `json:"listAs,omitempty"`
    MemberFrom *string `json:"memberFrom,omitempty"`
    Name *string `json:"name,omitempty"`
    Party *string `json:"party,omitempty"`
    PartyAbbreviation *string `json:"partyAbbreviation,omitempty"`
    PartyColour *string `json:"partyColour,omitempty"`
    ThumbnailURL *string `json:"thumbnailUrl,omitempty"`
    
}

