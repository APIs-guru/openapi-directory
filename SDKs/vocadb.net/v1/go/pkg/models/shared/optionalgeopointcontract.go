package shared

type OptionalGeoPointContract struct {
	Formatted *string  `json:"formatted"`
	HasValue  *bool    `json:"hasValue"`
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}
