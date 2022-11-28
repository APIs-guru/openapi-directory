package shared

// MemberDto
// The MemeberDTO Class.
// Contains relevant fields of Member DTO by masking actual Member entity's fields in application.
type MemberDto struct {
	Name *string `json:"name,omitempty"`
}
