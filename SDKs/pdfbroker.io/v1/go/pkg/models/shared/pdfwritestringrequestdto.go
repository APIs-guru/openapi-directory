package shared

// PdfWriteStringRequestDtoInput
// The request dto object to write a string on pdf page
type PdfWriteStringRequestDtoInput struct {
	FontFileBase64String *string                     `json:"FontFileBase64String,omitempty"`
	Options              *PdfWriteStringOptionsInput `json:"Options,omitempty"`
	PdfFileBase64String  *string                     `json:"PdfFileBase64String,omitempty"`
}
