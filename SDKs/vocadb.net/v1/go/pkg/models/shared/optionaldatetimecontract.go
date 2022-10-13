package shared

type OptionalDateTimeContract struct {
	Day       *int32  `json:"day"`
	Formatted *string `json:"formatted"`
	IsEmpty   *bool   `json:"isEmpty"`
	Month     *int32  `json:"month"`
	Year      *int32  `json:"year"`
}
