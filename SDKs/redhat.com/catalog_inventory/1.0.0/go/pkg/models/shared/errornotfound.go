package shared

type ErrorNotFoundErrors struct {
	Detail *string `json:"detail"`
	Status *string `json:"status"`
}

type ErrorNotFound struct {
	Errors []ErrorNotFoundErrors `json:"errors"`
}
