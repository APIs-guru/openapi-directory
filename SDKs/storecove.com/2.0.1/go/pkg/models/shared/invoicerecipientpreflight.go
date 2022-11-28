package shared

// InvoiceRecipientPreflight
// Identifies the invoice recipient to preflight
type InvoiceRecipientPreflight struct {
	PublicIdentifiers []PublicIdentifier `json:"publicIdentifiers,omitempty"`
}
