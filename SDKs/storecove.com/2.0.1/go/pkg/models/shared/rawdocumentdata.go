package shared

type RawDocumentDataParseStrategyEnum string

const (
	RawDocumentDataParseStrategyEnumUbl  RawDocumentDataParseStrategyEnum = "ubl"
	RawDocumentDataParseStrategyEnumCii  RawDocumentDataParseStrategyEnum = "cii"
	RawDocumentDataParseStrategyEnumIdoc RawDocumentDataParseStrategyEnum = "idoc"
)

// RawDocumentData
// A document to send, in base64 encoded format.
type RawDocumentData struct {
	Document       string                            `json:"document"`
	DocumentTypeID *string                           `json:"documentTypeId,omitempty"`
	Parse          *bool                             `json:"parse,omitempty"`
	ParseStrategy  *RawDocumentDataParseStrategyEnum `json:"parseStrategy,omitempty"`
	ProcessID      *string                           `json:"processId,omitempty"`
}
