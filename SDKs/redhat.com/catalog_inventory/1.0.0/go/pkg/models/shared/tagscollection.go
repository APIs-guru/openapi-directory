package shared

type TagsCollection struct {
	Data  []Tag               `json:"data"`
	Links *CollectionLinks    `json:"links"`
	Meta  *CollectionMetadata `json:"meta"`
}
