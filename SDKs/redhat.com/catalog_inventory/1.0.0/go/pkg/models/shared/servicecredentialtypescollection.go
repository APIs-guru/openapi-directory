package shared

type ServiceCredentialTypesCollection struct {
	Data  []ServiceCredentialType `json:"data"`
	Links *CollectionLinks        `json:"links"`
	Meta  *CollectionMetadata     `json:"meta"`
}
