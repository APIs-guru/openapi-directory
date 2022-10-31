package shared



type V3Status struct {
    Health *int32 `json:"health,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

