package shared

type PreviewSyncServiceDocumentDocumentPermission struct {
	AccountSid  *string `json:"account_sid"`
	DocumentSid *string `json:"document_sid"`
	Identity    *string `json:"identity"`
	Manage      *bool   `json:"manage"`
	Read        *bool   `json:"read"`
	ServiceSid  *string `json:"service_sid"`
	URL         *string `json:"url"`
	Write       *bool   `json:"write"`
}
