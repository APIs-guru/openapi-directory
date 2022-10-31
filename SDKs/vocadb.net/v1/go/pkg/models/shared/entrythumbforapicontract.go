package shared



type EntryThumbForAPIContract struct {
    Mime *string `json:"mime,omitempty"`
    URLOriginal *string `json:"urlOriginal,omitempty"`
    URLSmallThumb *string `json:"urlSmallThumb,omitempty"`
    URLThumb *string `json:"urlThumb,omitempty"`
    URLTinyThumb *string `json:"urlTinyThumb,omitempty"`
    
}

