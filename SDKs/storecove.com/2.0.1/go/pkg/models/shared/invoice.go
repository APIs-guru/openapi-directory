package shared

type InvoiceInvoiceTypeTypeOfInvoiceEnum string

const (
	InvoiceInvoiceTypeTypeOfInvoiceEnumThreeHundredAndEighty     InvoiceInvoiceTypeTypeOfInvoiceEnum = "380"
	InvoiceInvoiceTypeTypeOfInvoiceEnumThreeHundredAndEightyOne  InvoiceInvoiceTypeTypeOfInvoiceEnum = "381"
	InvoiceInvoiceTypeTypeOfInvoiceEnumThreeHundredAndEightyFour InvoiceInvoiceTypeTypeOfInvoiceEnum = "384"
)

type InvoicePaymentMeansCodePaymentMeansCodeEnum string

const (
	InvoicePaymentMeansCodePaymentMeansCodeEnumOnlinePaymentService InvoicePaymentMeansCodePaymentMeansCodeEnum = "online_payment_service"
	InvoicePaymentMeansCodePaymentMeansCodeEnumBankCard             InvoicePaymentMeansCodePaymentMeansCodeEnum = "bank_card"
	InvoicePaymentMeansCodePaymentMeansCodeEnumDirectDebit          InvoicePaymentMeansCodePaymentMeansCodeEnum = "direct_debit"
	InvoicePaymentMeansCodePaymentMeansCodeEnumStandingAgreement    InvoicePaymentMeansCodePaymentMeansCodeEnum = "standing_agreement"
	InvoicePaymentMeansCodePaymentMeansCodeEnumCreditTransfer       InvoicePaymentMeansCodePaymentMeansCodeEnum = "credit_transfer"
	InvoicePaymentMeansCodePaymentMeansCodeEnumSeBankgiro           InvoicePaymentMeansCodePaymentMeansCodeEnum = "se_bankgiro"
	InvoicePaymentMeansCodePaymentMeansCodeEnumSePlusgiro           InvoicePaymentMeansCodePaymentMeansCodeEnum = "se_plusgiro"
	InvoicePaymentMeansCodePaymentMeansCodeEnumAunzNpp              InvoicePaymentMeansCodePaymentMeansCodeEnum = "aunz_npp"
	InvoicePaymentMeansCodePaymentMeansCodeEnumUnknown              InvoicePaymentMeansCodePaymentMeansCodeEnum = ""
	InvoicePaymentMeansCodePaymentMeansCodeEnumOne                  InvoicePaymentMeansCodePaymentMeansCodeEnum = "1"
	InvoicePaymentMeansCodePaymentMeansCodeEnumThirty               InvoicePaymentMeansCodePaymentMeansCodeEnum = "30"
	InvoicePaymentMeansCodePaymentMeansCodeEnumThirtyOne            InvoicePaymentMeansCodePaymentMeansCodeEnum = "31"
	InvoicePaymentMeansCodePaymentMeansCodeEnumFortyTwo             InvoicePaymentMeansCodePaymentMeansCodeEnum = "42"
	InvoicePaymentMeansCodePaymentMeansCodeEnumFortyEight           InvoicePaymentMeansCodePaymentMeansCodeEnum = "48"
	InvoicePaymentMeansCodePaymentMeansCodeEnumFortyNine            InvoicePaymentMeansCodePaymentMeansCodeEnum = "49"
	InvoicePaymentMeansCodePaymentMeansCodeEnumFiftySeven           InvoicePaymentMeansCodePaymentMeansCodeEnum = "57"
	InvoicePaymentMeansCodePaymentMeansCodeEnumFiftyEight           InvoicePaymentMeansCodePaymentMeansCodeEnum = "58"
)

type InvoicePaymentTermsThePaymentTerms struct {
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

type InvoiceTaxSystemTaxSystemEnum string

const (
	InvoiceTaxSystemTaxSystemEnumTaxLineAmounts     InvoiceTaxSystemTaxSystemEnum = "tax_line_amounts"
	InvoiceTaxSystemTaxSystemEnumTaxLinePercentages InvoiceTaxSystemTaxSystemEnum = "tax_line_percentages"
	InvoiceTaxSystemTaxSystemEnumTaxNoTax           InvoiceTaxSystemTaxSystemEnum = "tax_no_tax"
)

type Invoice struct {
	AccountingCost            *string                                      `json:"accountingCost,omitempty"`
	AccountingCustomerParty   AccountingCustomerParty                      `json:"accountingCustomerParty"`
	AccountingSupplierParty   *AccountingSupplierParty                     `json:"accountingSupplierParty,omitempty"`
	AllowanceCharges          []AllowanceCharge                            `json:"allowanceCharges,omitempty"`
	AmountIncludingVat        float64                                      `json:"amountIncludingVat"`
	BillingReference          *string                                      `json:"billingReference,omitempty"`
	BuyerReference            *string                                      `json:"buyerReference,omitempty"`
	ConsumerTaxMode           *bool                                        `json:"consumerTaxMode,omitempty"`
	ContractDocumentReference *string                                      `json:"contractDocumentReference,omitempty"`
	Delivery                  *Delivery                                    `json:"delivery,omitempty"`
	DocumentCurrencyCode      *CurrencyCodeEnum                            `json:"documentCurrencyCode,omitempty"`
	DueDate                   *string                                      `json:"dueDate,omitempty"`
	InvoiceLines              []InvoiceLine                                `json:"invoiceLines"`
	InvoiceNumber             string                                       `json:"invoiceNumber"`
	InvoicePeriod             *string                                      `json:"invoicePeriod,omitempty"`
	InvoiceType               *InvoiceInvoiceTypeTypeOfInvoiceEnum         `json:"invoiceType,omitempty"`
	IssueDate                 string                                       `json:"issueDate"`
	Note                      *string                                      `json:"note,omitempty"`
	OrderReference            *string                                      `json:"orderReference,omitempty"`
	PaymentMeansArray         []PaymentMeans                               `json:"paymentMeansArray,omitempty"`
	PaymentMeansBic           *string                                      `json:"paymentMeansBic,omitempty"`
	PaymentMeansCode          *InvoicePaymentMeansCodePaymentMeansCodeEnum `json:"paymentMeansCode,omitempty"`
	PaymentMeansIban          *string                                      `json:"paymentMeansIban,omitempty"`
	PaymentMeansPaymentID     *string                                      `json:"paymentMeansPaymentId,omitempty"`
	PaymentTerms              *InvoicePaymentTermsThePaymentTerms          `json:"paymentTerms,omitempty"`
	PrepaidAmount             *float64                                     `json:"prepaidAmount,omitempty"`
	ProjectReference          *string                                      `json:"projectReference,omitempty"`
	SalesOrderID              *string                                      `json:"salesOrderId,omitempty"`
	TaxExemptReason           *InvoiceTaxExemptReasonEnum                  `json:"taxExemptReason,omitempty"`
	TaxPointDate              *string                                      `json:"taxPointDate,omitempty"`
	TaxSubtotals              []TaxSubtotal                                `json:"taxSubtotals,omitempty"`
	TaxSystem                 *InvoiceTaxSystemTaxSystemEnum               `json:"taxSystem,omitempty"`
	UblExtensions             []string                                     `json:"ublExtensions,omitempty"`
	VatReverseCharge          *bool                                        `json:"vatReverseCharge,omitempty"`
}
