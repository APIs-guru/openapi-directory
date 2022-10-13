package shared

type ServiceCredentialsCollection struct {
	Data  []ServiceCredential `json:"data"`
	Links *CollectionLinks    `json:"links"`
	Meta  *CollectionMetadata `json:"meta"`
}
