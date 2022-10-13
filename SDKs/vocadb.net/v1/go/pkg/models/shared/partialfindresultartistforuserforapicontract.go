package shared

type PartialFindResultArtistForUserForAPIContract struct {
	Items      []ArtistForUserForAPIContract `json:"items"`
	Term       *string                       `json:"term"`
	TotalCount *int32                        `json:"totalCount"`
}
