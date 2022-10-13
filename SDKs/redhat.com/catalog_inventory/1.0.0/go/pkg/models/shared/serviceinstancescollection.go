package shared

type ServiceInstancesCollection struct {
	Data  []ServiceInstance   `json:"data"`
	Links *CollectionLinks    `json:"links"`
	Meta  *CollectionMetadata `json:"meta"`
}
