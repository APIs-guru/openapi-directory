package shared

type ServiceOfferingsCollection struct {
	Data  []ServiceOffering   `json:"data"`
	Links *CollectionLinks    `json:"links"`
	Meta  *CollectionMetadata `json:"meta"`
}
