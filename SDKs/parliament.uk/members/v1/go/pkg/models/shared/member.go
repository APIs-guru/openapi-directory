package shared

type Member struct {
	Gender                *string          `json:"gender"`
	ID                    *int32           `json:"id"`
	LatestHouseMembership *HouseMembership `json:"latestHouseMembership"`
	LatestParty           *Party           `json:"latestParty"`
	NameAddressAs         *string          `json:"nameAddressAs"`
	NameDisplayAs         *string          `json:"nameDisplayAs"`
	NameFullTitle         *string          `json:"nameFullTitle"`
	NameListAs            *string          `json:"nameListAs"`
	ThumbnailURL          *string          `json:"thumbnailUrl"`
}
