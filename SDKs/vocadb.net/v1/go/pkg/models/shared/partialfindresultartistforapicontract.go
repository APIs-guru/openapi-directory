package shared

type PartialFindResultArtistForAPIContract struct {
	Items      []ArtistForAPIContract `json:"items,omitempty"`
	Term       *string                `json:"term,omitempty"`
	TotalCount *int32                 `json:"totalCount,omitempty"`
}
