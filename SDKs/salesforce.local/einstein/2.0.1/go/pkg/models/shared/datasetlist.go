package shared



type DatasetList struct {
    Data []Dataset `json:"data,omitempty"`
    Object *string `json:"object,omitempty"`
    
}

