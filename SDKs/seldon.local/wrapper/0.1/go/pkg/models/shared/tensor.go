package shared

type Tensor struct {
	Shape  []int32   `json:"shape"`
	Values []float64 `json:"values"`
}
