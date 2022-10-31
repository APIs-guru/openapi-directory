package shared



type Sentence struct {
    Book *Book `json:"book,omitempty"`
    ID *string `json:"id,omitempty"`
    Sentence *string `json:"sentence,omitempty"`
    
}

