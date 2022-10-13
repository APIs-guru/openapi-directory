package shared

type PartySeatCount struct {
	Female    *int32 `json:"female"`
	Male      *int32 `json:"male"`
	NonBinary *int32 `json:"nonBinary"`
	Party     *Party `json:"party"`
	Total     *int32 `json:"total"`
}
