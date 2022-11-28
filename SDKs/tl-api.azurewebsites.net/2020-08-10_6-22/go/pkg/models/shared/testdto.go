package shared

// TestDto
// The TestDTO Class.
// Contains relevant fields of Test DTO by masking actual Test entity's fields in application.
type TestDto struct {
	ID *int32 `json:"id,omitempty"`
}
