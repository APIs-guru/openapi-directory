package shared

type PartySeatCount struct {
	Female    *int32 `json:"female,omitempty"`
	Male      *int32 `json:"male,omitempty"`
	NonBinary *int32 `json:"nonBinary,omitempty"`
	Party     *Party `json:"party,omitempty"`
	Total     *int32 `json:"total,omitempty"`
}
