package shared



type SavedQueryRestAPIGet struct {
    CreatedBy *Meta31 `json:"created_by,omitempty"`
    Database *Meta32 `json:"database,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Schema *string `json:"schema,omitempty"`
    SQL *string `json:"sql,omitempty"`
    SQLTables *interface{} `json:"sql_tables,omitempty"`
    
}

