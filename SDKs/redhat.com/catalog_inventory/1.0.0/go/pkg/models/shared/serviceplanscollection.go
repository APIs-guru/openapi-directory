package shared

type ServicePlansCollection struct {
	Data  []ServicePlan       `json:"data"`
	Links *CollectionLinks    `json:"links"`
	Meta  *CollectionMetadata `json:"meta"`
}
