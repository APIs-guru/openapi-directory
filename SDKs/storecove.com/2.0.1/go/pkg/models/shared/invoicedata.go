package shared

type InvoiceDataConversionStrategyConversionStrategyEnum string

const (
	InvoiceDataConversionStrategyConversionStrategyEnumUbl  InvoiceDataConversionStrategyConversionStrategyEnum = "ubl"
	InvoiceDataConversionStrategyConversionStrategyEnumCii  InvoiceDataConversionStrategyConversionStrategyEnum = "cii"
	InvoiceDataConversionStrategyConversionStrategyEnumIdoc InvoiceDataConversionStrategyConversionStrategyEnum = "idoc"
)

type InvoiceData struct {
	ConversionStrategy *InvoiceDataConversionStrategyConversionStrategyEnum `json:"conversionStrategy"`
	Document           *string                                              `json:"document"`
}
