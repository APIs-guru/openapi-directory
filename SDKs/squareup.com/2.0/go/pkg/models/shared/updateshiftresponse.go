package shared

type UpdateShiftResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Shift  *Shift  `json:"shift,omitempty"`
}
