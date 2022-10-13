package shared

type VoteItem struct {
	Links []Link `json:"links"`
	Value *Vote  `json:"value"`
}
