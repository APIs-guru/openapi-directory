package shared

type RetrieveEmployeeResponse struct {
	Employee *Employee `json:"employee,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
}
