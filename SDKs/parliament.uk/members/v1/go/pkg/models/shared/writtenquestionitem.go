package shared

type WrittenQuestionItem struct {
	Links []Link           `json:"links"`
	Value *WrittenQuestion `json:"value"`
}
