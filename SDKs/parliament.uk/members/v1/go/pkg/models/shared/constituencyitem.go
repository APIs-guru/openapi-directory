package shared

type ConstituencyItem struct {
	Links []Link        `json:"links"`
	Value *Constituency `json:"value"`
}
