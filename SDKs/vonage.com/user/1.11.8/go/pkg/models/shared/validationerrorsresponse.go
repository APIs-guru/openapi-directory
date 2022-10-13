package shared

type ValidationErrorsResponse struct {
	Instance          *string                `json:"instance"`
	InvalidParameters []DetailedInvalidParam `json:"invalid_parameters"`
	Status            *float64               `json:"status"`
	Title             *string                `json:"title"`
}
