package shared

type DefaultData struct {
	Names    []string               `json:"names"`
	Ndarry   []interface{}          `json:"ndarry"`
	Tensor   *Tensor                `json:"tensor"`
	Tftensor *TensorflowTensorProto `json:"tftensor"`
}
