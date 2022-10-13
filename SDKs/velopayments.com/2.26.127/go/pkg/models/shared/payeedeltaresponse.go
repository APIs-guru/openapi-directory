package shared

type PayeeDeltaResponse struct {
	Content []PayeeDelta  `json:"content"`
	Links   []interface{} `json:"links"`
	Page    *interface{}  `json:"page"`
}
