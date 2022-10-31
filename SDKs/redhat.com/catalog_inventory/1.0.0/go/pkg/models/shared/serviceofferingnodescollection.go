package shared



type ServiceOfferingNodesCollection struct {
    Data []ServiceOfferingNode `json:"data,omitempty"`
    Links *CollectionLinks `json:"links,omitempty"`
    Meta *CollectionMetadata `json:"meta,omitempty"`
    
}

