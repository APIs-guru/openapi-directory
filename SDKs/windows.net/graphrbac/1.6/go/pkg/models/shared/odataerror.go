package shared



type OdataError struct {
    Code *string `json:"code,omitempty"`
    Message *ErrorMessage `json:"message,omitempty"`
    
}

