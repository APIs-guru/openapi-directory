package shared

type Invoice struct {
	AcceptedPaymentMethods *InvoiceAcceptedPaymentMethods `json:"accepted_payment_methods"`
	CreatedAt              *string                        `json:"created_at"`
	CustomFields           []InvoiceCustomField           `json:"custom_fields"`
	DeliveryMethod         *interface{}                   `json:"delivery_method"`
	Description            *string                        `json:"description"`
	ID                     *string                        `json:"id"`
	InvoiceNumber          *string                        `json:"invoice_number"`
	LocationID             *string                        `json:"location_id"`
	NextPaymentAmountMoney *Money                         `json:"next_payment_amount_money"`
	OrderID                *string                        `json:"order_id"`
	PaymentRequests        []InvoicePaymentRequest        `json:"payment_requests"`
	PrimaryRecipient       *InvoiceRecipient              `json:"primary_recipient"`
	PublicURL              *string                        `json:"public_url"`
	ScheduledAt            *string                        `json:"scheduled_at"`
	Status                 *string                        `json:"status"`
	SubscriptionID         *string                        `json:"subscription_id"`
	Timezone               *string                        `json:"timezone"`
	Title                  *string                        `json:"title"`
	UpdatedAt              *string                        `json:"updated_at"`
	Version                *int64                         `json:"version"`
}
