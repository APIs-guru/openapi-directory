package shared

type GraphQlRequest struct {
	OperationName *string                `json:"operationName"`
	Query         string                 `json:"query"`
	Variables     map[string]interface{} `json:"variables"`
}
