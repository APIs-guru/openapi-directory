package shared

type EventOpRs struct {
	Ccwms map[string]float32 `json:"ccwms,omitempty"`
	Dprs  map[string]float32 `json:"dprs,omitempty"`
	Oprs  map[string]float32 `json:"oprs,omitempty"`
}
