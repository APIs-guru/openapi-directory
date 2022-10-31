package shared

type InvoiceDataConversionStrategyEnum string

const (
	InvoiceDataConversionStrategyEnumUbl  InvoiceDataConversionStrategyEnum = "ubl"
	InvoiceDataConversionStrategyEnumCii  InvoiceDataConversionStrategyEnum = "cii"
	InvoiceDataConversionStrategyEnumIdoc InvoiceDataConversionStrategyEnum = "idoc"
)

type InvoiceData struct {
	ConversionStrategy *InvoiceDataConversionStrategyEnum `json:"conversionStrategy,omitempty"`
	Document           *string                            `json:"document,omitempty"`
}
