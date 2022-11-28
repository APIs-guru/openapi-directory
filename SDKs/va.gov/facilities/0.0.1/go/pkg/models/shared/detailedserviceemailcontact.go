package shared

// DetailedServiceEmailContact
// Email contact information.
type DetailedServiceEmailContact struct {
	EmailAddress *string `json:"email_address,omitempty"`
	EmailLabel   *string `json:"email_label,omitempty"`
}
