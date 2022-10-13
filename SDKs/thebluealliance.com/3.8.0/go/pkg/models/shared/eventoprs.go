package shared

type EventOpRs struct {
	Ccwms map[string]float32 `json:"ccwms"`
	Dprs  map[string]float32 `json:"dprs"`
	Oprs  map[string]float32 `json:"oprs"`
}
