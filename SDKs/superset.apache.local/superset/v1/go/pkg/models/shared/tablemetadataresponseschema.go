package shared



type TableMetadataResponseSchema struct {
    Columns []TableMetadataColumnsResponse `json:"columns,omitempty"`
    ForeignKeys []TableMetadataForeignKeysIndexesResponse `json:"foreignKeys,omitempty"`
    Indexes []TableMetadataForeignKeysIndexesResponse `json:"indexes,omitempty"`
    Name *string `json:"name,omitempty"`
    PrimaryKey *TableMetadataPrimaryKeyResponse `json:"primaryKey,omitempty"`
    SelectStar *string `json:"selectStar,omitempty"`
    
}

