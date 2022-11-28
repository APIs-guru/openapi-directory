package shared

// FoTransformRequestDto
// The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
type FoTransformRequestDto struct {
	FoDocumentBase64String      *string           `json:"FoDocumentBase64String,omitempty"`
	Metadata                    *PdfMetadataDto   `json:"Metadata,omitempty"`
	Resources                   map[string]string `json:"Resources,omitempty"`
	XMLDataDocumentBase64String *string           `json:"XmlDataDocumentBase64String,omitempty"`
}
