package shared

type Account struct {
	Address *Address `json:"address"`
	ID      *float64 `json:"id"`
	Name    *string  `json:"name"`
	Status  *string  `json:"status"`
}
