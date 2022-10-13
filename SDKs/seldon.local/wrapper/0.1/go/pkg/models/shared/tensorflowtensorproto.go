package shared

type TensorflowTensorProto struct {
	BoolVal           []bool                             `json:"bool_val"`
	DcomplexVal       []float64                          `json:"dcomplex_val"`
	DoubleVal         []float64                          `json:"double_val"`
	Dtype             *TensorflowDataTypeEnum            `json:"dtype"`
	FloatVal          []float32                          `json:"float_val"`
	HalfVal           []int32                            `json:"half_val"`
	Int64Val          []string                           `json:"int64_val"`
	IntVal            []int32                            `json:"int_val"`
	ResourceHandleVal []TensorflowResourceHandleProto    `json:"resource_handle_val"`
	ScomplexVal       []float32                          `json:"scomplex_val"`
	StringVal         []string                           `json:"string_val"`
	TensorContent     *string                            `json:"tensor_content"`
	TensorShape       *TensorflowTensorShapeProto        `json:"tensor_shape"`
	Uint32Val         []int64                            `json:"uint32_val"`
	Uint64Val         []string                           `json:"uint64_val"`
	VariantVal        []TensorflowVariantTensorDataProto `json:"variant_val"`
	VersionNumber     *int32                             `json:"version_number"`
}
