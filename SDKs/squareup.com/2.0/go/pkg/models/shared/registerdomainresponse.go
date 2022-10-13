package shared

type RegisterDomainResponse struct {
	Errors []Error `json:"errors"`
	Status *string `json:"status"`
}
