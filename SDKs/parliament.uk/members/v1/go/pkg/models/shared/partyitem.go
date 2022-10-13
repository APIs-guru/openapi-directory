package shared

type PartyItem struct {
	Links []Link `json:"links"`
	Value *Party `json:"value"`
}
