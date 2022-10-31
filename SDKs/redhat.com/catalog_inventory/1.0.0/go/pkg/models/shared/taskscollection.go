package shared



type TasksCollection struct {
    Data []Task `json:"data,omitempty"`
    Links *CollectionLinks `json:"links,omitempty"`
    Meta *CollectionMetadata `json:"meta,omitempty"`
    
}

