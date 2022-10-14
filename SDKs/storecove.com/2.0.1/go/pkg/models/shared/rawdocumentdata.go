package shared

type RawDocumentDataParseStrategyParseStrategyEnum string

const (
	RawDocumentDataParseStrategyParseStrategyEnumUbl  RawDocumentDataParseStrategyParseStrategyEnum = "ubl"
	RawDocumentDataParseStrategyParseStrategyEnumCii  RawDocumentDataParseStrategyParseStrategyEnum = "cii"
	RawDocumentDataParseStrategyParseStrategyEnumIdoc RawDocumentDataParseStrategyParseStrategyEnum = "idoc"
)

type RawDocumentData struct {
	Document       string                                         `json:"document"`
	DocumentTypeID *string                                        `json:"documentTypeId,omitempty"`
	Parse          *bool                                          `json:"parse,omitempty"`
	ParseStrategy  *RawDocumentDataParseStrategyParseStrategyEnum `json:"parseStrategy,omitempty"`
	ProcessID      *string                                        `json:"processId,omitempty"`
}
