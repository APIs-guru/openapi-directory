package shared

type Status struct {
	Code   *int32                `json:"code,omitempty"`
	Info   *string               `json:"info,omitempty"`
	Reason *string               `json:"reason,omitempty"`
	Status *StatusStatusFlagEnum `json:"status,omitempty"`
}
