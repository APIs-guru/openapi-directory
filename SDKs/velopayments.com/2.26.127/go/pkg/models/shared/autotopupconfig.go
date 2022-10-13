package shared

type AutoTopUpConfig struct {
	Enabled       bool   `json:"enabled"`
	MinBalance    *int64 `json:"minBalance"`
	TargetBalance *int64 `json:"targetBalance"`
}
