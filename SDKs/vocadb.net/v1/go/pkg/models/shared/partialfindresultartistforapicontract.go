package shared

type PartialFindResultArtistForAPIContract struct {
	Items      []ArtistForAPIContract `json:"items"`
	Term       *string                `json:"term"`
	TotalCount *int32                 `json:"totalCount"`
}
