package shared

type ServiceInventoriesCollection struct {
	Data  []ServiceInventory  `json:"data,omitempty"`
	Links *CollectionLinks    `json:"links,omitempty"`
	Meta  *CollectionMetadata `json:"meta,omitempty"`
}
