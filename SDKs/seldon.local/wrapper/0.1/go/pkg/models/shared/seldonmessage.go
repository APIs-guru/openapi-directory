package shared



type SeldonMessage struct {
    BinData *string `json:"binData,omitempty"`
    Data *DefaultData `json:"data,omitempty"`
    Meta *Meta `json:"meta,omitempty"`
    Status *Status `json:"status,omitempty"`
    StrData *string `json:"strData,omitempty"`
    
}

