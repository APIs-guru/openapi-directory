package shared

type OrderFulfillmentRecipient struct {
	Address      *Address `json:"address"`
	CustomerID   *string  `json:"customer_id"`
	DisplayName  *string  `json:"display_name"`
	EmailAddress *string  `json:"email_address"`
	PhoneNumber  *string  `json:"phone_number"`
}
