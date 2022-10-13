package shared

type MemberHistory struct {
	HouseMembershipHistory []HouseMembership `json:"houseMembershipHistory"`
	ID                     *int32            `json:"id"`
	NameHistory            []MemberName      `json:"nameHistory"`
	PartyHistory           []MemberParty     `json:"partyHistory"`
	ThumbnailURL           *string           `json:"thumbnailUrl"`
}
