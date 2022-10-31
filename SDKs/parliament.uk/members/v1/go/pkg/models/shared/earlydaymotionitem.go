package shared

type EarlyDayMotionItem struct {
	Links []Link          `json:"links,omitempty"`
	Value *EarlyDayMotion `json:"value,omitempty"`
}
