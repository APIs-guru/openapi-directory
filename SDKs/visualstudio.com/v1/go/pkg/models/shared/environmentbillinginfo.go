package shared

type EnvironmentBillingInfo struct {
	ID     *string `json:"id,omitempty"`
	Name   *string `json:"name,omitempty"`
	Sku    *Sku    `json:"sku,omitempty"`
	UserID *string `json:"userId,omitempty"`
}
