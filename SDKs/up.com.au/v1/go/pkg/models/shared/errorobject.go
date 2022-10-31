package shared



type ErrorObjectSource struct {
    Parameter *string `json:"parameter,omitempty"`
    Pointer *string `json:"pointer,omitempty"`
    
}

type ErrorObject struct {
    Detail string `json:"detail"`
    Source *ErrorObjectSource `json:"source,omitempty"`
    Status string `json:"status"`
    Title string `json:"title"`
    
}

