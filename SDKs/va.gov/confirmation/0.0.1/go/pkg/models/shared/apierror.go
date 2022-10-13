package shared

type APIErrorErrors struct {
	Code   *string `json:"code"`
	Detail *string `json:"detail"`
	Status *string `json:"status"`
	Title  *string `json:"title"`
}

type APIError struct {
	Errors []APIErrorErrors `json:"errors"`
}
