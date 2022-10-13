package shared

type TableMetadataForeignKeysIndexesResponse struct {
	ColumnNames     []string                      `json:"column_names"`
	Name            *string                       `json:"name"`
	Options         *TableMetadataOptionsResponse `json:"options"`
	ReferredColumns []string                      `json:"referred_columns"`
	ReferredSchema  *string                       `json:"referred_schema"`
	ReferredTable   *string                       `json:"referred_table"`
	Type            *string                       `json:"type"`
}
