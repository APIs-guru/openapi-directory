package shared

type MemberViewModel struct {
	ID                    *int32                    `json:"id"`
	LatestHouseMembership *HouseMembershipViewModel `json:"latestHouseMembership"`
	LatestParty           *PartyViewModel           `json:"latestParty"`
	NameAddressAs         *string                   `json:"nameAddressAs"`
	NameDisplayAs         *string                   `json:"nameDisplayAs"`
	NameFullTitle         *string                   `json:"nameFullTitle"`
	NameListAs            *string                   `json:"nameListAs"`
	ThumbnailURL          *string                   `json:"thumbnailUrl"`
}
