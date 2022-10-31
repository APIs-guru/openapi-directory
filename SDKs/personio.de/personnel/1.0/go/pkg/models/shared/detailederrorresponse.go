package shared



type DetailedErrorResponseErrorDetailedMessage struct {
    Break *int64 `json:"break,omitempty"`
    Comment *string `json:"comment,omitempty"`
    Date *string `json:"date,omitempty"`
    Employee *int64 `json:"employee,omitempty"`
    EndTime *string `json:"end_time,omitempty"`
    ErrorMsg *string `json:"error_msg,omitempty"`
    ID *int64 `json:"id,omitempty"`
    StartTime *string `json:"start_time,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

type DetailedErrorResponseError struct {
    Code *int64 `json:"code,omitempty"`
    DetailedMessage []DetailedErrorResponseErrorDetailedMessage `json:"detailed_message,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type DetailedErrorResponse struct {
    Error DetailedErrorResponseError `json:"error"`
    Success bool `json:"success"`
    
}

