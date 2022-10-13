package shared

type FacilitiesMetadata struct {
	Distances  []Distance `json:"distances"`
	Pagination Pagination `json:"pagination"`
}
