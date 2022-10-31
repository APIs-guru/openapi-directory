package shared

type Meta struct {
	Metrics     []Metric               `json:"metrics,omitempty"`
	Puid        *string                `json:"puid,omitempty"`
	RequestPath map[string]string      `json:"requestPath,omitempty"`
	Routing     map[string]int32       `json:"routing,omitempty"`
	Tags        map[string]interface{} `json:"tags,omitempty"`
}
