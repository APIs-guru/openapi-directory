package shared

type LocationItem struct {
	Links []Link    `json:"links"`
	Value *Location `json:"value"`
}
