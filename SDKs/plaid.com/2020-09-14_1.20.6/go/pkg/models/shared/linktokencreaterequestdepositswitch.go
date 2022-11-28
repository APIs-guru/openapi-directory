package shared

// LinkTokenCreateRequestDepositSwitch
// Specifies options for initializing Link for use with the Deposit Switch (beta) product. This field is required if `deposit_switch` is included in the `products` array.
type LinkTokenCreateRequestDepositSwitch struct {
	DepositSwitchID string `json:"deposit_switch_id"`
}
