package shared

// TensorflowResourceHandleProto
// Protocol buffer representing a handle to a tensorflow resource. Handles are
// not valid across executions, but can be serialized back and forth from within
// a single run.
type TensorflowResourceHandleProto struct {
	Container     *string `json:"container,omitempty"`
	Device        *string `json:"device,omitempty"`
	HashCode      *string `json:"hash_code,omitempty"`
	MaybeTypeName *string `json:"maybe_type_name,omitempty"`
	Name          *string `json:"name,omitempty"`
}
