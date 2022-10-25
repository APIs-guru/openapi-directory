package shared

type PaymentMeansCodeEnum string

const (
	PaymentMeansCodeEnumCreditTransfer       PaymentMeansCodeEnum = "credit_transfer"
	PaymentMeansCodeEnumDirectDebit          PaymentMeansCodeEnum = "direct_debit"
	PaymentMeansCodeEnumBankCard             PaymentMeansCodeEnum = "bank_card"
	PaymentMeansCodeEnumCreditCard           PaymentMeansCodeEnum = "credit_card"
	PaymentMeansCodeEnumOnlinePaymentService PaymentMeansCodeEnum = "online_payment_service"
	PaymentMeansCodeEnumStandingAgreement    PaymentMeansCodeEnum = "standing_agreement"
	PaymentMeansCodeEnumAunzNpp              PaymentMeansCodeEnum = "aunz_npp"
	PaymentMeansCodeEnumAunzNppPayid         PaymentMeansCodeEnum = "aunz_npp_payid"
	PaymentMeansCodeEnumAunzNppPayto         PaymentMeansCodeEnum = "aunz_npp_payto"
	PaymentMeansCodeEnumAunzBpay             PaymentMeansCodeEnum = "aunz_bpay"
	PaymentMeansCodeEnumAunzPostbillpay      PaymentMeansCodeEnum = "aunz_postbillpay"
	PaymentMeansCodeEnumAunzURI              PaymentMeansCodeEnum = "aunz_uri"
	PaymentMeansCodeEnumSeBankgiro           PaymentMeansCodeEnum = "se_bankgiro"
	PaymentMeansCodeEnumSePlusgiro           PaymentMeansCodeEnum = "se_plusgiro"
	PaymentMeansCodeEnumSgGiro               PaymentMeansCodeEnum = "sg_giro"
	PaymentMeansCodeEnumSgCard               PaymentMeansCodeEnum = "sg_card"
	PaymentMeansCodeEnumSgPaynow             PaymentMeansCodeEnum = "sg_paynow"
)

type PaymentMeans struct {
	Account     *string              `json:"account,omitempty"`
	BrancheCode *string              `json:"branche_code,omitempty"`
	Code        PaymentMeansCodeEnum `json:"code"`
	Holder      *string              `json:"holder,omitempty"`
	Mandate     *string              `json:"mandate,omitempty"`
	Network     *string              `json:"network,omitempty"`
	PaymentID   *string              `json:"paymentId,omitempty"`
}
