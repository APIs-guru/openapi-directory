package shared

type AttachmentMimeTypeEnum string

const (
	AttachmentMimeTypeEnumApplicationPdf AttachmentMimeTypeEnum = "application/pdf"
)

type Attachment struct {
	Document     string                 `json:"document"`
	Filename     *string                `json:"filename,omitempty"`
	MimeType     AttachmentMimeTypeEnum `json:"mimeType"`
	PrimaryImage *bool                  `json:"primaryImage,omitempty"`
}
