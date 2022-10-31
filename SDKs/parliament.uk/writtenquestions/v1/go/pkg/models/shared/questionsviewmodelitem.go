package shared

type QuestionsViewModelItem struct {
	Links []Link              `json:"links,omitempty"`
	Value *QuestionsViewModel `json:"value,omitempty"`
}
