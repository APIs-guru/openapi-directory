package shared

type ServiceOfferingNodesCollection struct {
	Data  []ServiceOfferingNode `json:"data"`
	Links *CollectionLinks      `json:"links"`
	Meta  *CollectionMetadata   `json:"meta"`
}
