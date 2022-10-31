package shared



type APIError struct {
    Errors []ErrorMessage `json:"errors"`
    
}

