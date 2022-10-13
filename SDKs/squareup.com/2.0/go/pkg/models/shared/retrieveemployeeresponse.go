package shared

type RetrieveEmployeeResponse struct {
	Employee *Employee `json:"employee"`
	Errors   []Error   `json:"errors"`
}
