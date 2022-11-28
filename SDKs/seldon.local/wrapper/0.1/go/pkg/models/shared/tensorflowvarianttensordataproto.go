package shared

// TensorflowVariantTensorDataProto
// Protocol buffer representing the serialization format of DT_VARIANT tensors.
type TensorflowVariantTensorDataProto struct {
	Metadata *string                 `json:"metadata,omitempty"`
	Tensors  []TensorflowTensorProto `json:"tensors,omitempty"`
	TypeName *string                 `json:"type_name,omitempty"`
}
