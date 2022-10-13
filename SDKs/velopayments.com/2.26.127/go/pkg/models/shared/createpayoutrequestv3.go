package shared

type CreatePayoutRequestV3 struct {
	Payments          []PaymentInstructionV3 `json:"payments"`
	PayoutFromPayorID *string                `json:"payoutFromPayorId"`
	PayoutMemo        *string                `json:"payoutMemo"`
	PayoutToPayorID   *string                `json:"payoutToPayorId"`
}
