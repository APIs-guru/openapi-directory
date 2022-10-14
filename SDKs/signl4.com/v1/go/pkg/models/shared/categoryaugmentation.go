package shared

type CategoryAugmentation struct {
	Enabled *bool   `json:"enabled,omitempty"`
	Name    *string `json:"name,omitempty"`
	Type    *int32  `json:"type,omitempty"`
	Value   *string `json:"value,omitempty"`
}
