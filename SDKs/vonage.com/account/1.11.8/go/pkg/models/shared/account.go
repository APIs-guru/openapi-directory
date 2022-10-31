package shared

type Account struct {
	Address *Address `json:"address,omitempty"`
	ID      *float64 `json:"id,omitempty"`
	Name    *string  `json:"name,omitempty"`
	Status  *string  `json:"status,omitempty"`
}
