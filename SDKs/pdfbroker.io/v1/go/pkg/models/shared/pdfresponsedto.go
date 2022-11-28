package shared

// PdfResponseDto
// When setting the Accept-header in the request to "application/json" the content of the pdf file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "application/pdf".
type PdfResponseDto struct {
	ErrorMessage        *string `json:"ErrorMessage,omitempty"`
	PdfFileBase64String *string `json:"PdfFileBase64String,omitempty"`
}
