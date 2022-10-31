package shared



type StatementsViewModelItem struct {
    Links []Link `json:"links,omitempty"`
    Value *StatementsViewModel `json:"value,omitempty"`
    
}

