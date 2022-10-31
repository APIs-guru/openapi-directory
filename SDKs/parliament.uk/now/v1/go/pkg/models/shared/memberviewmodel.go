package shared

type MemberViewModel struct {
	ID                    *int32                    `json:"id,omitempty"`
	LatestHouseMembership *HouseMembershipViewModel `json:"latestHouseMembership,omitempty"`
	LatestParty           *PartyViewModel           `json:"latestParty,omitempty"`
	NameAddressAs         *string                   `json:"nameAddressAs,omitempty"`
	NameDisplayAs         *string                   `json:"nameDisplayAs,omitempty"`
	NameFullTitle         *string                   `json:"nameFullTitle,omitempty"`
	NameListAs            *string                   `json:"nameListAs,omitempty"`
	ThumbnailURL          *string                   `json:"thumbnailUrl,omitempty"`
}
