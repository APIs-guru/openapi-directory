package shared

type UpdateShiftResponse struct {
	Errors []Error `json:"errors"`
	Shift  *Shift  `json:"shift"`
}
