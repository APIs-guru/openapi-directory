package shared

// LoginDto
// The LoginDTO Class.
// Contains relevant fields of Login DTO.
type LoginDto struct {
	Password *string `json:"password,omitempty"`
	Remember *bool   `json:"remember,omitempty"`
	Username *string `json:"username,omitempty"`
}
