package shared

type ValueData struct {
	Obis  *string  `json:"Obis,omitempty"`
	Value *float64 `json:"Value,omitempty"`
}
