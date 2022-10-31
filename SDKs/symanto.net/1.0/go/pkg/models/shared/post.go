package shared



type Post struct {
    ID *string `json:"id,omitempty"`
    Language string `json:"language"`
    Text string `json:"text"`
    
}

