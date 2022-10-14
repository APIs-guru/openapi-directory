package shared

type InvoicePaymentRequest struct {
	AutomaticPaymentSource          *string                  `json:"automatic_payment_source,omitempty"`
	CardID                          *string                  `json:"card_id,omitempty"`
	ComputedAmountMoney             *Money                   `json:"computed_amount_money,omitempty"`
	DueDate                         *string                  `json:"due_date,omitempty"`
	FixedAmountRequestedMoney       *Money                   `json:"fixed_amount_requested_money,omitempty"`
	PercentageRequested             *string                  `json:"percentage_requested,omitempty"`
	Reminders                       []InvoicePaymentReminder `json:"reminders,omitempty"`
	RequestMethod                   *string                  `json:"request_method,omitempty"`
	RequestType                     *string                  `json:"request_type,omitempty"`
	RoundingAdjustmentIncludedMoney *Money                   `json:"rounding_adjustment_included_money,omitempty"`
	TippingEnabled                  *bool                    `json:"tipping_enabled,omitempty"`
	TotalCompletedAmountMoney       *Money                   `json:"total_completed_amount_money,omitempty"`
	UID                             *string                  `json:"uid,omitempty"`
}
