package shared

type NearbyResponse struct {
	Data []Nearby `json:"data"`
	Meta *Meta    `json:"meta"`
}
