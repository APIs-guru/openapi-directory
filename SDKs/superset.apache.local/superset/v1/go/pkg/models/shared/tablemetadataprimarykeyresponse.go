package shared

type TableMetadataPrimaryKeyResponse struct {
	ColumnNames []string `json:"column_names"`
	Name        *string  `json:"name"`
	Type        *string  `json:"type"`
}
