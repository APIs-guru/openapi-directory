package shared

type InvoicePaymentRequest struct {
	AutomaticPaymentSource          *string                  `json:"automatic_payment_source"`
	CardID                          *string                  `json:"card_id"`
	ComputedAmountMoney             *Money                   `json:"computed_amount_money"`
	DueDate                         *string                  `json:"due_date"`
	FixedAmountRequestedMoney       *Money                   `json:"fixed_amount_requested_money"`
	PercentageRequested             *string                  `json:"percentage_requested"`
	Reminders                       []InvoicePaymentReminder `json:"reminders"`
	RequestMethod                   *string                  `json:"request_method"`
	RequestType                     *string                  `json:"request_type"`
	RoundingAdjustmentIncludedMoney *Money                   `json:"rounding_adjustment_included_money"`
	TippingEnabled                  *bool                    `json:"tipping_enabled"`
	TotalCompletedAmountMoney       *Money                   `json:"total_completed_amount_money"`
	UID                             *string                  `json:"uid"`
}
