package shared

type FlexV1Interaction struct {
	Channel *interface{}           `json:"channel"`
	Links   map[string]interface{} `json:"links"`
	Routing *interface{}           `json:"routing"`
	Sid     *string                `json:"sid"`
	URL     *string                `json:"url"`
}
