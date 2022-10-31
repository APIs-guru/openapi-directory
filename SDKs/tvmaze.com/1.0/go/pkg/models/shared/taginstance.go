package shared



type TagInstanceEmbedded struct {
    Show map[string]interface{} `json:"show,omitempty"`
    
}

type TagInstance struct {
    Embedded *TagInstanceEmbedded `json:"_embedded,omitempty"`
    ShowID *int64 `json:"show_id,omitempty"`
    
}

