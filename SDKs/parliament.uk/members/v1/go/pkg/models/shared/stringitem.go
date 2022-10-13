package shared

type StringItem struct {
	Links []Link  `json:"links"`
	Value *string `json:"value"`
}
