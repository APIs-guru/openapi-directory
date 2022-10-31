package shared



type GraphQlRequest struct {
    OperationName *string `json:"operationName,omitempty"`
    Query string `json:"query"`
    Variables map[string]interface{} `json:"variables,omitempty"`
    
}

