package shared

type PayeeDeltaResponse2 struct {
	Content []PayeeDelta2 `json:"content"`
	Links   []interface{} `json:"links"`
	Page    *interface{}  `json:"page"`
}
