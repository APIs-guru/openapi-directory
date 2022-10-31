package shared



type SecretFilterBody struct {
    Type *int32 `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

