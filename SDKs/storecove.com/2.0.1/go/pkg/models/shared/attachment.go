package shared

type AttachmentMimeTypeEnum string

const (
	AttachmentMimeTypeEnumApplicationPdf AttachmentMimeTypeEnum = "application/pdf"
)

// Attachment
// A document attachment to the invoice.
type Attachment struct {
	Document     string                 `json:"document"`
	Filename     *string                `json:"filename,omitempty"`
	MimeType     AttachmentMimeTypeEnum `json:"mimeType"`
	PrimaryImage *bool                  `json:"primaryImage,omitempty"`
}
