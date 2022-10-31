package shared



type SourcesCollection struct {
    Data []Source `json:"data,omitempty"`
    Links *CollectionLinks `json:"links,omitempty"`
    Meta *CollectionMetadata `json:"meta,omitempty"`
    
}

