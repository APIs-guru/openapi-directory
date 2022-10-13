package shared

type APIUsageList struct {
	Data   []APIUsage `json:"data"`
	Object *string    `json:"object"`
}
