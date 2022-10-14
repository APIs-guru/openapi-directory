package shared

type PaymentMeansCodeCodeEnum string

const (
	PaymentMeansCodeCodeEnumCreditTransfer       PaymentMeansCodeCodeEnum = "credit_transfer"
	PaymentMeansCodeCodeEnumDirectDebit          PaymentMeansCodeCodeEnum = "direct_debit"
	PaymentMeansCodeCodeEnumBankCard             PaymentMeansCodeCodeEnum = "bank_card"
	PaymentMeansCodeCodeEnumCreditCard           PaymentMeansCodeCodeEnum = "credit_card"
	PaymentMeansCodeCodeEnumOnlinePaymentService PaymentMeansCodeCodeEnum = "online_payment_service"
	PaymentMeansCodeCodeEnumStandingAgreement    PaymentMeansCodeCodeEnum = "standing_agreement"
	PaymentMeansCodeCodeEnumAunzNpp              PaymentMeansCodeCodeEnum = "aunz_npp"
	PaymentMeansCodeCodeEnumAunzNppPayid         PaymentMeansCodeCodeEnum = "aunz_npp_payid"
	PaymentMeansCodeCodeEnumAunzNppPayto         PaymentMeansCodeCodeEnum = "aunz_npp_payto"
	PaymentMeansCodeCodeEnumAunzBpay             PaymentMeansCodeCodeEnum = "aunz_bpay"
	PaymentMeansCodeCodeEnumAunzPostbillpay      PaymentMeansCodeCodeEnum = "aunz_postbillpay"
	PaymentMeansCodeCodeEnumAunzURI              PaymentMeansCodeCodeEnum = "aunz_uri"
	PaymentMeansCodeCodeEnumSeBankgiro           PaymentMeansCodeCodeEnum = "se_bankgiro"
	PaymentMeansCodeCodeEnumSePlusgiro           PaymentMeansCodeCodeEnum = "se_plusgiro"
	PaymentMeansCodeCodeEnumSgGiro               PaymentMeansCodeCodeEnum = "sg_giro"
	PaymentMeansCodeCodeEnumSgCard               PaymentMeansCodeCodeEnum = "sg_card"
	PaymentMeansCodeCodeEnumSgPaynow             PaymentMeansCodeCodeEnum = "sg_paynow"
)

type PaymentMeans struct {
	Account     *string                  `json:"account,omitempty"`
	BrancheCode *string                  `json:"branche_code,omitempty"`
	Code        PaymentMeansCodeCodeEnum `json:"code"`
	Holder      *string                  `json:"holder,omitempty"`
	Mandate     *string                  `json:"mandate,omitempty"`
	Network     *string                  `json:"network,omitempty"`
	PaymentID   *string                  `json:"paymentId,omitempty"`
}
