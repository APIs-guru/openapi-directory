package shared



type InvoiceRecipient struct {
    Emails []string `json:"emails,omitempty"`
    PublicIdentifiers []PublicIdentifier `json:"publicIdentifiers,omitempty"`
    
}

