package shared

type PayeeDeltaResponse2 struct {
	Content []PayeeDelta2 `json:"content,omitempty"`
	Links   []interface{} `json:"links,omitempty"`
	Page    *interface{}  `json:"page,omitempty"`
}
