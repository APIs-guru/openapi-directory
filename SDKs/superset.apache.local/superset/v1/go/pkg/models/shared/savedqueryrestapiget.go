package shared

type SavedQueryRestAPIGet struct {
	CreatedBy   *Meta31      `json:"created_by"`
	Database    *Meta32      `json:"database"`
	Description *string      `json:"description"`
	ID          *int32       `json:"id"`
	Label       *string      `json:"label"`
	Schema      *string      `json:"schema"`
	SQL         *string      `json:"sql"`
	SQLTables   *interface{} `json:"sql_tables"`
}
