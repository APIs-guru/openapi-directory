package shared

type TasksCollection struct {
	Data  []Task              `json:"data"`
	Links *CollectionLinks    `json:"links"`
	Meta  *CollectionMetadata `json:"meta"`
}
