package shared

type GetShiftResponse struct {
	Errors []Error `json:"errors"`
	Shift  *Shift  `json:"shift"`
}
