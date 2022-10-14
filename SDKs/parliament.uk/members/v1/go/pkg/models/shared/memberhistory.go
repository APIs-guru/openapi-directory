package shared

type MemberHistory struct {
	HouseMembershipHistory []HouseMembership `json:"houseMembershipHistory,omitempty"`
	ID                     *int32            `json:"id,omitempty"`
	NameHistory            []MemberName      `json:"nameHistory,omitempty"`
	PartyHistory           []MemberParty     `json:"partyHistory,omitempty"`
	ThumbnailURL           *string           `json:"thumbnailUrl,omitempty"`
}
