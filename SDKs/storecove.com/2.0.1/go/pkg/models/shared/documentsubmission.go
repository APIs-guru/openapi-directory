package shared

type DocumentSubmission struct {
	Attachments        []Attachment      `json:"attachments"`
	CreatePrimaryImage *bool             `json:"createPrimaryImage"`
	Document           *SendableDocument `json:"document"`
	IdempotencyGUID    *string           `json:"idempotencyGuid"`
	LegalEntityID      *int64            `json:"legalEntityId"`
	ReceiveGUID        *string           `json:"receiveGuid"`
	Routing            *Routing          `json:"routing"`
}
