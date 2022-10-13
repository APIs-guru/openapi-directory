package shared

type TableMetadataResponseSchema struct {
	Columns     []TableMetadataColumnsResponse            `json:"columns"`
	ForeignKeys []TableMetadataForeignKeysIndexesResponse `json:"foreignKeys"`
	Indexes     []TableMetadataForeignKeysIndexesResponse `json:"indexes"`
	Name        *string                                   `json:"name"`
	PrimaryKey  *TableMetadataPrimaryKeyResponse          `json:"primaryKey"`
	SelectStar  *string                                   `json:"selectStar"`
}
