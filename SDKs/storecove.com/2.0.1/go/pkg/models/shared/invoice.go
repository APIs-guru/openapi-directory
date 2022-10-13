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
	Note *string `json:"note"`
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
	AccountingCost            *string                                      `json:"accountingCost"`
	AccountingCustomerParty   AccountingCustomerParty                      `json:"accountingCustomerParty"`
	AccountingSupplierParty   *AccountingSupplierParty                     `json:"accountingSupplierParty"`
	AllowanceCharges          []AllowanceCharge                            `json:"allowanceCharges"`
	AmountIncludingVat        float64                                      `json:"amountIncludingVat"`
	BillingReference          *string                                      `json:"billingReference"`
	BuyerReference            *string                                      `json:"buyerReference"`
	ConsumerTaxMode           *bool                                        `json:"consumerTaxMode"`
	ContractDocumentReference *string                                      `json:"contractDocumentReference"`
	Delivery                  *Delivery                                    `json:"delivery"`
	DocumentCurrencyCode      *CurrencyCodeEnum                            `json:"documentCurrencyCode"`
	DueDate                   *string                                      `json:"dueDate"`
	InvoiceLines              []InvoiceLine                                `json:"invoiceLines"`
	InvoiceNumber             string                                       `json:"invoiceNumber"`
	InvoicePeriod             *string                                      `json:"invoicePeriod"`
	InvoiceType               *InvoiceInvoiceTypeTypeOfInvoiceEnum         `json:"invoiceType"`
	IssueDate                 string                                       `json:"issueDate"`
	Note                      *string                                      `json:"note"`
	OrderReference            *string                                      `json:"orderReference"`
	PaymentMeansArray         []PaymentMeans                               `json:"paymentMeansArray"`
	PaymentMeansBic           *string                                      `json:"paymentMeansBic"`
	PaymentMeansCode          *InvoicePaymentMeansCodePaymentMeansCodeEnum `json:"paymentMeansCode"`
	PaymentMeansIban          *string                                      `json:"paymentMeansIban"`
	PaymentMeansPaymentID     *string                                      `json:"paymentMeansPaymentId"`
	PaymentTerms              *InvoicePaymentTermsThePaymentTerms          `json:"paymentTerms"`
	PrepaidAmount             *float64                                     `json:"prepaidAmount"`
	ProjectReference          *string                                      `json:"projectReference"`
	SalesOrderID              *string                                      `json:"salesOrderId"`
	TaxExemptReason           *InvoiceTaxExemptReasonEnum                  `json:"taxExemptReason"`
	TaxPointDate              *string                                      `json:"taxPointDate"`
	TaxSubtotals              []TaxSubtotal                                `json:"taxSubtotals"`
	TaxSystem                 *InvoiceTaxSystemTaxSystemEnum               `json:"taxSystem"`
	UblExtensions             []string                                     `json:"ublExtensions"`
	VatReverseCharge          *bool                                        `json:"vatReverseCharge"`
}
