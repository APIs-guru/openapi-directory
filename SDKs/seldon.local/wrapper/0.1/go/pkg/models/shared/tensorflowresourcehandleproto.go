package shared

type TensorflowResourceHandleProto struct {
	Container     *string `json:"container"`
	Device        *string `json:"device"`
	HashCode      *string `json:"hash_code"`
	MaybeTypeName *string `json:"maybe_type_name"`
	Name          *string `json:"name"`
}
