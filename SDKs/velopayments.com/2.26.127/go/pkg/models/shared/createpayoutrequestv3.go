package shared

type CreatePayoutRequestV3 struct {
	Payments          []PaymentInstructionV3 `json:"payments"`
	PayoutFromPayorID *string                `json:"payoutFromPayorId,omitempty"`
	PayoutMemo        *string                `json:"payoutMemo,omitempty"`
	PayoutToPayorID   *string                `json:"payoutToPayorId,omitempty"`
}
