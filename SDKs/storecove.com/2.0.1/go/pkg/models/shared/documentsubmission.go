package shared

// DocumentSubmission
// The document you want Storecove to send, with some meta-data.
type DocumentSubmission struct {
	Attachments        []Attachment      `json:"attachments,omitempty"`
	CreatePrimaryImage *bool             `json:"createPrimaryImage,omitempty"`
	Document           *SendableDocument `json:"document,omitempty"`
	IdempotencyGUID    *string           `json:"idempotencyGuid,omitempty"`
	LegalEntityID      *int64            `json:"legalEntityId,omitempty"`
	ReceiveGUID        *string           `json:"receiveGuid,omitempty"`
	Routing            *Routing          `json:"routing,omitempty"`
}
