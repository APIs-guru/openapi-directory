package shared

type PartySeatCountItem struct {
	Links []Link          `json:"links,omitempty"`
	Value *PartySeatCount `json:"value,omitempty"`
}
