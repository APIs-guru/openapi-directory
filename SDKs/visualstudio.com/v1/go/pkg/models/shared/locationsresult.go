package shared

type LocationsResult struct {
	Available []int32           `json:"available"`
	Current   *int32            `json:"current"`
	Hostnames map[string]string `json:"hostnames"`
}
