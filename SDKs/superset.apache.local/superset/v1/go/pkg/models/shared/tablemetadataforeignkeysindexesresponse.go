package shared



type TableMetadataForeignKeysIndexesResponse struct {
    ColumnNames []string `json:"column_names,omitempty"`
    Name *string `json:"name,omitempty"`
    Options *TableMetadataOptionsResponse `json:"options,omitempty"`
    ReferredColumns []string `json:"referred_columns,omitempty"`
    ReferredSchema *string `json:"referred_schema,omitempty"`
    ReferredTable *string `json:"referred_table,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

