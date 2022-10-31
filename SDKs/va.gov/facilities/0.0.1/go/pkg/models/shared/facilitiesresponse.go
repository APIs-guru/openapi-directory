package shared

type FacilitiesResponse struct {
	Data  []Facility         `json:"data,omitempty"`
	Links PageLinks          `json:"links"`
	Meta  FacilitiesMetadata `json:"meta"`
}
