package shared

type Tensor struct {
	Shape  []int32   `json:"shape,omitempty"`
	Values []float64 `json:"values,omitempty"`
}
