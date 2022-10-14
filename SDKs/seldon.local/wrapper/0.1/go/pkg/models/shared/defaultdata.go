package shared

type DefaultData struct {
	Names    []string               `json:"names,omitempty"`
	Ndarry   []interface{}          `json:"ndarry,omitempty"`
	Tensor   *Tensor                `json:"tensor,omitempty"`
	Tftensor *TensorflowTensorProto `json:"tftensor,omitempty"`
}
