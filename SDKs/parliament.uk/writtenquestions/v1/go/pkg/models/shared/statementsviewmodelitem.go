package shared

type StatementsViewModelItem struct {
	Links []Link               `json:"links"`
	Value *StatementsViewModel `json:"value"`
}
