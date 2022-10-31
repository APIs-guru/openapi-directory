package shared



type TableMetadataColumnsResponse struct {
    DuplicatesConstraint *string `json:"duplicates_constraint,omitempty"`
    Keys []string `json:"keys,omitempty"`
    LongType *string `json:"longType,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

