package shared

type InsightsV1Call struct {
	Links map[string]interface{} `json:"links"`
	Sid   *string                `json:"sid"`
	URL   *string                `json:"url"`
}
