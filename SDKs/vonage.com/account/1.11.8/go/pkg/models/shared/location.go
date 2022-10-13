package shared

type Location struct {
	Address *AddressWithTimeZone `json:"address"`
	ID      *float64             `json:"id"`
	Name    *string              `json:"name"`
}
