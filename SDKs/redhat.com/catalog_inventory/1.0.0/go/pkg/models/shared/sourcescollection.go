package shared

type SourcesCollection struct {
	Data  []Source            `json:"data"`
	Links *CollectionLinks    `json:"links"`
	Meta  *CollectionMetadata `json:"meta"`
}
