package shared



type Command struct {
    Attributes map[string]interface{} `json:"attributes,omitempty"`
    Description *string `json:"description,omitempty"`
    DeviceID *int64 `json:"deviceId,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

