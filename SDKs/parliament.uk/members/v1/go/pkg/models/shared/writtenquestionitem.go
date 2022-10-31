package shared



type WrittenQuestionItem struct {
    Links []Link `json:"links,omitempty"`
    Value *WrittenQuestion `json:"value,omitempty"`
    
}

