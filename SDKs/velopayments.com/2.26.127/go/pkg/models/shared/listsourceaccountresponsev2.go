package shared



type ListSourceAccountResponseV2 struct {
    Content []SourceAccountResponseV2 `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    
}

