package shared

type PartialFindResultArtistForUserForAPIContract struct {
	Items      []ArtistForUserForAPIContract `json:"items,omitempty"`
	Term       *string                       `json:"term,omitempty"`
	TotalCount *int32                        `json:"totalCount,omitempty"`
}
