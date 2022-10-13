package shared

type Meta struct {
	Metrics     []Metric               `json:"metrics"`
	Puid        *string                `json:"puid"`
	RequestPath map[string]string      `json:"requestPath"`
	Routing     map[string]int32       `json:"routing"`
	Tags        map[string]interface{} `json:"tags"`
}
