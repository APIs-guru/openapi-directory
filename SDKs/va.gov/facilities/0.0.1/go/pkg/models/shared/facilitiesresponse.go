package shared

type FacilitiesResponse struct {
	Data  []Facility         `json:"data"`
	Links PageLinks          `json:"links"`
	Meta  FacilitiesMetadata `json:"meta"`
}
