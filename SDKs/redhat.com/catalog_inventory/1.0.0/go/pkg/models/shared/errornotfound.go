package shared

type ErrorNotFoundErrors struct {
	Detail *string `json:"detail,omitempty"`
	Status *string `json:"status,omitempty"`
}

type ErrorNotFound struct {
	Errors []ErrorNotFoundErrors `json:"errors,omitempty"`
}
