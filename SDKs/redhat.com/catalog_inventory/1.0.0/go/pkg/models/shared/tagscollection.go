package shared



type TagsCollection struct {
    Data []Tag `json:"data,omitempty"`
    Links *CollectionLinks `json:"links,omitempty"`
    Meta *CollectionMetadata `json:"meta,omitempty"`
    
}

