package shared

type RawDocumentDataParseStrategyParseStrategyEnum string

const (
	RawDocumentDataParseStrategyParseStrategyEnumUbl  RawDocumentDataParseStrategyParseStrategyEnum = "ubl"
	RawDocumentDataParseStrategyParseStrategyEnumCii  RawDocumentDataParseStrategyParseStrategyEnum = "cii"
	RawDocumentDataParseStrategyParseStrategyEnumIdoc RawDocumentDataParseStrategyParseStrategyEnum = "idoc"
)

type RawDocumentData struct {
	Document       string                                         `json:"document"`
	DocumentTypeID *string                                        `json:"documentTypeId"`
	Parse          *bool                                          `json:"parse"`
	ParseStrategy  *RawDocumentDataParseStrategyParseStrategyEnum `json:"parseStrategy"`
	ProcessID      *string                                        `json:"processId"`
}
