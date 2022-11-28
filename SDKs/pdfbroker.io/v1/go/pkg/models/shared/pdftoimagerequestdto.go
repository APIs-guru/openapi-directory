package shared

type PdfToImageRequestDto struct {
	Options             *PdfToImageOptions `json:"Options,omitempty"`
	PdfFileBase64String *string            `json:"PdfFileBase64String,omitempty"`
}
