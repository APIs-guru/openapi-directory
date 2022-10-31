package shared



type DatasetRestAPIPost struct {
    Database int32 `json:"database"`
    Owners []int32 `json:"owners,omitempty"`
    Schema *string `json:"schema,omitempty"`
    TableName string `json:"table_name"`
    
}

