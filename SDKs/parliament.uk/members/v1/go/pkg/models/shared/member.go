package shared

type Member struct {
	Gender                *string          `json:"gender,omitempty"`
	ID                    *int32           `json:"id,omitempty"`
	LatestHouseMembership *HouseMembership `json:"latestHouseMembership,omitempty"`
	LatestParty           *Party           `json:"latestParty,omitempty"`
	NameAddressAs         *string          `json:"nameAddressAs,omitempty"`
	NameDisplayAs         *string          `json:"nameDisplayAs,omitempty"`
	NameFullTitle         *string          `json:"nameFullTitle,omitempty"`
	NameListAs            *string          `json:"nameListAs,omitempty"`
	ThumbnailURL          *string          `json:"thumbnailUrl,omitempty"`
}
