package shared

type ServiceInventoriesCollection struct {
	Data  []ServiceInventory  `json:"data"`
	Links *CollectionLinks    `json:"links"`
	Meta  *CollectionMetadata `json:"meta"`
}
