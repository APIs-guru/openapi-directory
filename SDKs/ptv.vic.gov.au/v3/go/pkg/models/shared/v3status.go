package shared

type V3Status struct {
	Health  *int32  `json:"health"`
	Version *string `json:"version"`
}
