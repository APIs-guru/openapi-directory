package shared

type PdfResponseDto struct {
	ErrorMessage        *string `json:"ErrorMessage"`
	PdfFileBase64String *string `json:"PdfFileBase64String"`
}
