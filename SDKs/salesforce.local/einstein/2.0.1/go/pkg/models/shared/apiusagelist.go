package shared

type APIUsageList struct {
	Data   []APIUsage `json:"data,omitempty"`
	Object *string    `json:"object,omitempty"`
}
