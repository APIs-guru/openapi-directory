package shared

// ActionToPostItem
// Container class for an action item
type ActionToPostItem struct {
	ObisCode *string  `json:"ObisCode,omitempty"`
	Value    *float64 `json:"Value,omitempty"`
}
