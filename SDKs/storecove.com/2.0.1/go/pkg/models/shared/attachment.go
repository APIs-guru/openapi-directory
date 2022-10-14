package shared

type AttachmentMimeTypeMimeTypeEnum string

const (
	AttachmentMimeTypeMimeTypeEnumApplicationPdf AttachmentMimeTypeMimeTypeEnum = "application/pdf"
)

type Attachment struct {
	Document     string                         `json:"document"`
	Filename     *string                        `json:"filename,omitempty"`
	MimeType     AttachmentMimeTypeMimeTypeEnum `json:"mimeType"`
	PrimaryImage *bool                          `json:"primaryImage,omitempty"`
}
