package operations



type SignalEvaluateRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type SignalEvaluateResponse struct {
    ContentType string 
    Error map[string]interface{} 
    SignalEvaluateResponse map[string]interface{} 
    StatusCode int64 
    
}

