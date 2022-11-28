package shared

type InvoiceTypeOfInvoiceEnum string

const (
	InvoiceTypeOfInvoiceEnumThreeHundredAndEighty     InvoiceTypeOfInvoiceEnum = "380"
	InvoiceTypeOfInvoiceEnumThreeHundredAndEightyOne  InvoiceTypeOfInvoiceEnum = "381"
	InvoiceTypeOfInvoiceEnumThreeHundredAndEightyFour InvoiceTypeOfInvoiceEnum = "384"
)

type InvoicePaymentMeansCodeEnum string

const (
	InvoicePaymentMeansCodeEnumOnlinePaymentService InvoicePaymentMeansCodeEnum = "online_payment_service"
	InvoicePaymentMeansCodeEnumBankCard             InvoicePaymentMeansCodeEnum = "bank_card"
	InvoicePaymentMeansCodeEnumDirectDebit          InvoicePaymentMeansCodeEnum = "direct_debit"
	InvoicePaymentMeansCodeEnumStandingAgreement    InvoicePaymentMeansCodeEnum = "standing_agreement"
	InvoicePaymentMeansCodeEnumCreditTransfer       InvoicePaymentMeansCodeEnum = "credit_transfer"
	InvoicePaymentMeansCodeEnumSeBankgiro           InvoicePaymentMeansCodeEnum = "se_bankgiro"
	InvoicePaymentMeansCodeEnumSePlusgiro           InvoicePaymentMeansCodeEnum = "se_plusgiro"
	InvoicePaymentMeansCodeEnumAunzNpp              InvoicePaymentMeansCodeEnum = "aunz_npp"
	InvoicePaymentMeansCodeEnumUnknown              InvoicePaymentMeansCodeEnum = ""
	InvoicePaymentMeansCodeEnumOne                  InvoicePaymentMeansCodeEnum = "1"
	InvoicePaymentMeansCodeEnumThirty               InvoicePaymentMeansCodeEnum = "30"
	InvoicePaymentMeansCodeEnumThirtyOne            InvoicePaymentMeansCodeEnum = "31"
	InvoicePaymentMeansCodeEnumFortyTwo             InvoicePaymentMeansCodeEnum = "42"
	InvoicePaymentMeansCodeEnumFortyEight           InvoicePaymentMeansCodeEnum = "48"
	InvoicePaymentMeansCodeEnumFortyNine            InvoicePaymentMeansCodeEnum = "49"
	InvoicePaymentMeansCodeEnumFiftySeven           InvoicePaymentMeansCodeEnum = "57"
	InvoicePaymentMeansCodeEnumFiftyEight           InvoicePaymentMeansCodeEnum = "58"
)

// InvoiceThePaymentTerms
// The payment terms of the invoice.
type InvoiceThePaymentTerms struct {
	Note *string `json:"note,omitempty"`
}

type InvoiceTaxExemptReasonEnum string

const (
	InvoiceTaxExemptReasonEnumExport         InvoiceTaxExemptReasonEnum = "export"
	InvoiceTaxExemptReasonEnumReverseCharge  InvoiceTaxExemptReasonEnum = "reverse_charge"
	InvoiceTaxExemptReasonEnumZeroRated      InvoiceTaxExemptReasonEnum = "zero_rated"
	InvoiceTaxExemptReasonEnumExempt         InvoiceTaxExemptReasonEnum = "exempt"
	InvoiceTaxExemptReasonEnumOutsideScope   InvoiceTaxExemptReasonEnum = "outside_scope"
	InvoiceTaxExemptReasonEnumIntraCommunity InvoiceTaxExemptReasonEnum = "intra_community"
)

type InvoiceTaxSystemEnum string

const (
	InvoiceTaxSystemEnumTaxLineAmounts     InvoiceTaxSystemEnum = "tax_line_amounts"
	InvoiceTaxSystemEnumTaxLinePercentages InvoiceTaxSystemEnum = "tax_line_percentages"
	InvoiceTaxSystemEnumTaxNoTax           InvoiceTaxSystemEnum = "tax_no_tax"
)

// Invoice
// The invoice to send.  Provide either invoice, or invoiceData, but not both.
type Invoice struct {
	AccountingCost            *string                      `json:"accountingCost,omitempty"`
	AccountingCustomerParty   AccountingCustomerParty      `json:"accountingCustomerParty"`
	AccountingSupplierParty   *AccountingSupplierParty     `json:"accountingSupplierParty,omitempty"`
	AllowanceCharges          []AllowanceCharge            `json:"allowanceCharges,omitempty"`
	AmountIncludingVat        float64                      `json:"amountIncludingVat"`
	BillingReference          *string                      `json:"billingReference,omitempty"`
	BuyerReference            *string                      `json:"buyerReference,omitempty"`
	ConsumerTaxMode           *bool                        `json:"consumerTaxMode,omitempty"`
	ContractDocumentReference *string                      `json:"contractDocumentReference,omitempty"`
	Delivery                  *Delivery                    `json:"delivery,omitempty"`
	DocumentCurrencyCode      *CurrencyCodeEnum            `json:"documentCurrencyCode,omitempty"`
	DueDate                   *string                      `json:"dueDate,omitempty"`
	InvoiceLines              []InvoiceLine                `json:"invoiceLines"`
	InvoiceNumber             string                       `json:"invoiceNumber"`
	InvoicePeriod             *string                      `json:"invoicePeriod,omitempty"`
	InvoiceType               *InvoiceTypeOfInvoiceEnum    `json:"invoiceType,omitempty"`
	IssueDate                 string                       `json:"issueDate"`
	Note                      *string                      `json:"note,omitempty"`
	OrderReference            *string                      `json:"orderReference,omitempty"`
	PaymentMeansArray         []PaymentMeans               `json:"paymentMeansArray,omitempty"`
	PaymentMeansBic           *string                      `json:"paymentMeansBic,omitempty"`
	PaymentMeansCode          *InvoicePaymentMeansCodeEnum `json:"paymentMeansCode,omitempty"`
	PaymentMeansIban          *string                      `json:"paymentMeansIban,omitempty"`
	PaymentMeansPaymentID     *string                      `json:"paymentMeansPaymentId,omitempty"`
	PaymentTerms              *InvoiceThePaymentTerms      `json:"paymentTerms,omitempty"`
	PrepaidAmount             *float64                     `json:"prepaidAmount,omitempty"`
	ProjectReference          *string                      `json:"projectReference,omitempty"`
	SalesOrderID              *string                      `json:"salesOrderId,omitempty"`
	TaxExemptReason           *InvoiceTaxExemptReasonEnum  `json:"taxExemptReason,omitempty"`
	TaxPointDate              *string                      `json:"taxPointDate,omitempty"`
	TaxSubtotals              []TaxSubtotal                `json:"taxSubtotals,omitempty"`
	TaxSystem                 *InvoiceTaxSystemEnum        `json:"taxSystem,omitempty"`
	UblExtensions             []string                     `json:"ublExtensions,omitempty"`
	VatReverseCharge          *bool                        `json:"vatReverseCharge,omitempty"`
}
