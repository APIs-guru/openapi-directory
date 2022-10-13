package shared

type QuestionsViewModelItem struct {
	Links []Link              `json:"links"`
	Value *QuestionsViewModel `json:"value"`
}
