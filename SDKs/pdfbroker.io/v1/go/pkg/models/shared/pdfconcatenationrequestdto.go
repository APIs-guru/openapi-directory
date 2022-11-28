package shared

// PdfConcatenationRequestDto
// Request to concatenate a list of Pdf documents to a single Pdf document.
type PdfConcatenationRequestDto struct {
	PdfDocumentsAsBase64String []string `json:"PdfDocumentsAsBase64String,omitempty"`
}
