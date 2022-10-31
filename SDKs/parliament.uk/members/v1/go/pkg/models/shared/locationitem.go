package shared

type LocationItem struct {
	Links []Link    `json:"links,omitempty"`
	Value *Location `json:"value,omitempty"`
}
