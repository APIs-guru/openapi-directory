package shared

type ServiceInstancesCollection struct {
	Data  []ServiceInstance   `json:"data,omitempty"`
	Links *CollectionLinks    `json:"links,omitempty"`
	Meta  *CollectionMetadata `json:"meta,omitempty"`
}
