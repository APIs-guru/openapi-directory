package shared

// TensorShapeProtoDim
// One dimension of the tensor.
type TensorShapeProtoDim struct {
	Name *string `json:"name,omitempty"`
	Size *string `json:"size,omitempty"`
}
