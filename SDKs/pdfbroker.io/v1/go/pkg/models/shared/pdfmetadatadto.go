package shared

// PdfMetadataDto
// Enter meta data for pdf document
type PdfMetadataDto struct {
	Author         *string  `json:"Author,omitempty"`
	EnableAdd      *bool    `json:"EnableAdd,omitempty"`
	EnableCopy     *bool    `json:"EnableCopy,omitempty"`
	EnableModify   *bool    `json:"EnableModify,omitempty"`
	EnablePrinting *bool    `json:"EnablePrinting,omitempty"`
	Keywords       []string `json:"Keywords,omitempty"`
	OwnerPassword  *string  `json:"OwnerPassword,omitempty"`
	Subject        *string  `json:"Subject,omitempty"`
	Title          *string  `json:"Title,omitempty"`
	UserPassword   *string  `json:"UserPassword,omitempty"`
}
