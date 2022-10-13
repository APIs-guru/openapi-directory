package shared

type InvoiceRecipient struct {
	Emails            []string           `json:"emails"`
	PublicIdentifiers []PublicIdentifier `json:"publicIdentifiers"`
}
