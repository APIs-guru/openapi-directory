package shared

type TensorflowTensorProto struct {
	BoolVal           []bool                             `json:"bool_val,omitempty"`
	DcomplexVal       []float64                          `json:"dcomplex_val,omitempty"`
	DoubleVal         []float64                          `json:"double_val,omitempty"`
	Dtype             *TensorflowDataTypeEnum            `json:"dtype,omitempty"`
	FloatVal          []float32                          `json:"float_val,omitempty"`
	HalfVal           []int32                            `json:"half_val,omitempty"`
	Int64Val          []string                           `json:"int64_val,omitempty"`
	IntVal            []int32                            `json:"int_val,omitempty"`
	ResourceHandleVal []TensorflowResourceHandleProto    `json:"resource_handle_val,omitempty"`
	ScomplexVal       []float32                          `json:"scomplex_val,omitempty"`
	StringVal         []string                           `json:"string_val,omitempty"`
	TensorContent     *string                            `json:"tensor_content,omitempty"`
	TensorShape       *TensorflowTensorShapeProto        `json:"tensor_shape,omitempty"`
	Uint32Val         []int64                            `json:"uint32_val,omitempty"`
	Uint64Val         []string                           `json:"uint64_val,omitempty"`
	VariantVal        []TensorflowVariantTensorDataProto `json:"variant_val,omitempty"`
	VersionNumber     *int32                             `json:"version_number,omitempty"`
}
