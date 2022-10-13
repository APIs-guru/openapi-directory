package shared

type Status struct {
	Code   *int32                `json:"code"`
	Info   *string               `json:"info"`
	Reason *string               `json:"reason"`
	Status *StatusStatusFlagEnum `json:"status"`
}
