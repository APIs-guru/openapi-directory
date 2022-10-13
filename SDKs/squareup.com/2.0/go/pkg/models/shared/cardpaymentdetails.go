package shared

type CardPaymentDetails struct {
	ApplicationCryptogram      *string              `json:"application_cryptogram"`
	ApplicationIdentifier      *string              `json:"application_identifier"`
	ApplicationName            *string              `json:"application_name"`
	AuthResultCode             *string              `json:"auth_result_code"`
	AvsStatus                  *string              `json:"avs_status"`
	Card                       *Card                `json:"card"`
	CardPaymentTimeline        *CardPaymentTimeline `json:"card_payment_timeline"`
	CvvStatus                  *string              `json:"cvv_status"`
	DeviceDetails              *DeviceDetails       `json:"device_details"`
	EntryMethod                *string              `json:"entry_method"`
	Errors                     []Error              `json:"errors"`
	RefundRequiresCardPresence *bool                `json:"refund_requires_card_presence"`
	StatementDescription       *string              `json:"statement_description"`
	Status                     *string              `json:"status"`
	VerificationMethod         *string              `json:"verification_method"`
	VerificationResults        *string              `json:"verification_results"`
}
