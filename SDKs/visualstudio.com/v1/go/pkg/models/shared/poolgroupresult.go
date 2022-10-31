package shared



type PoolGroupResult struct {
    DisplayName *string `json:"displayName,omitempty"`
    Region *int32 `json:"region,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

