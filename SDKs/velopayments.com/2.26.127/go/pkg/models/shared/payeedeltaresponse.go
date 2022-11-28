package shared

// PayeeDeltaResponse
// List Payee Changes Response Object
type PayeeDeltaResponse struct {
	Content []PayeeDelta  `json:"content,omitempty"`
	Links   []interface{} `json:"links,omitempty"`
	Page    *interface{}  `json:"page,omitempty"`
}
