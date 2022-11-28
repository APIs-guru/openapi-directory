package shared

// FoRequestDto
// The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
type FoRequestDto struct {
	FoDocumentBase64String *string           `json:"FoDocumentBase64String,omitempty"`
	Metadata               *PdfMetadataDto   `json:"Metadata,omitempty"`
	Resources              map[string]string `json:"Resources,omitempty"`
}
