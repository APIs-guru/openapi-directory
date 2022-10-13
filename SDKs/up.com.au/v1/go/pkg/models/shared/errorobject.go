package shared

type ErrorObjectSource struct {
	Parameter *string `json:"parameter"`
	Pointer   *string `json:"pointer"`
}

type ErrorObject struct {
	Detail string             `json:"detail"`
	Source *ErrorObjectSource `json:"source"`
	Status string             `json:"status"`
	Title  string             `json:"title"`
}
