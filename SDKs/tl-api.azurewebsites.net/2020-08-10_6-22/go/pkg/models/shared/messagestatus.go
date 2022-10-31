package shared



type MessageStatus struct {
    MessageID *string `json:"messageId,omitempty"`
    ReferenceID *int32 `json:"referenceId,omitempty"`
    Source *interface{} `json:"source,omitempty"`
    StatusID *int32 `json:"statusId,omitempty"`
    StatusText *string `json:"statusText,omitempty"`
    
}

