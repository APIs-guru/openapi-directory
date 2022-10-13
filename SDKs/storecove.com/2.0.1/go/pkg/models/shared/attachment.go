package shared

type AttachmentMimeTypeMimeTypeEnum string

const (
	AttachmentMimeTypeMimeTypeEnumApplicationPdf AttachmentMimeTypeMimeTypeEnum = "application/pdf"
)

type Attachment struct {
	Document     string                         `json:"document"`
	Filename     *string                        `json:"filename"`
	MimeType     AttachmentMimeTypeMimeTypeEnum `json:"mimeType"`
	PrimaryImage *bool                          `json:"primaryImage"`
}
