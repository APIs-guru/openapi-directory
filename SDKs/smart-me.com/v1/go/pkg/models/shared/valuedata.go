package shared

// ValueData
// API Container for a (Device) Value
type ValueData struct {
	Obis  *string  `json:"Obis,omitempty"`
	Value *float64 `json:"Value,omitempty"`
}
