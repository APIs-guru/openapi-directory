package shared

type EnvironmentBillingInfo struct {
	ID     *string `json:"id"`
	Name   *string `json:"name"`
	Sku    *Sku    `json:"sku"`
	UserID *string `json:"userId"`
}
