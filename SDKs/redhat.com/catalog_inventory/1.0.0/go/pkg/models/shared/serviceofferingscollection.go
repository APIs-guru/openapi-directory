package shared

type ServiceOfferingsCollection struct {
	Data  []ServiceOffering   `json:"data,omitempty"`
	Links *CollectionLinks    `json:"links,omitempty"`
	Meta  *CollectionMetadata `json:"meta,omitempty"`
}
