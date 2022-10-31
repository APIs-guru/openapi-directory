package shared



type ServiceCredentialsCollection struct {
    Data []ServiceCredential `json:"data,omitempty"`
    Links *CollectionLinks `json:"links,omitempty"`
    Meta *CollectionMetadata `json:"meta,omitempty"`
    
}

