package shared

type CategoryAugmentation struct {
	Enabled *bool   `json:"enabled"`
	Name    *string `json:"name"`
	Type    *int32  `json:"type"`
	Value   *string `json:"value"`
}
