package shared

type CreateShiftResponse struct {
	Errors []Error `json:"errors"`
	Shift  *Shift  `json:"shift"`
}
