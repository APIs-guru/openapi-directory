package shared

type APIKeyOptions struct {
	Comment        *string `json:"comment,omitempty"`
	OrganizationID *string `json:"organization_id,omitempty"`
}
