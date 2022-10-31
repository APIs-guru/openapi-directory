package shared

type TableMetadataPrimaryKeyResponse struct {
	ColumnNames []string `json:"column_names,omitempty"`
	Name        *string  `json:"name,omitempty"`
	Type        *string  `json:"type,omitempty"`
}
