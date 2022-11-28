package shared

type InvoiceDataConversionStrategyEnum string

const (
	InvoiceDataConversionStrategyEnumUbl  InvoiceDataConversionStrategyEnum = "ubl"
	InvoiceDataConversionStrategyEnumCii  InvoiceDataConversionStrategyEnum = "cii"
	InvoiceDataConversionStrategyEnumIdoc InvoiceDataConversionStrategyEnum = "idoc"
)

// InvoiceData
// The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.
type InvoiceData struct {
	ConversionStrategy *InvoiceDataConversionStrategyEnum `json:"conversionStrategy,omitempty"`
	Document           *string                            `json:"document,omitempty"`
}
