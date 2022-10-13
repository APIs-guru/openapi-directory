package shared

type TensorflowVariantTensorDataProto struct {
	Metadata *string                 `json:"metadata"`
	Tensors  []TensorflowTensorProto `json:"tensors"`
	TypeName *string                 `json:"type_name"`
}
