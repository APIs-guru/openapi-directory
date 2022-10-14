package shared

type TensorflowVariantTensorDataProto struct {
	Metadata *string                 `json:"metadata,omitempty"`
	Tensors  []TensorflowTensorProto `json:"tensors,omitempty"`
	TypeName *string                 `json:"type_name,omitempty"`
}
