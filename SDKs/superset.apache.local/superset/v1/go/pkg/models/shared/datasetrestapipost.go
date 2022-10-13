package shared

type DatasetRestAPIPost struct {
	Database  int32   `json:"database"`
	Owners    []int32 `json:"owners"`
	Schema    *string `json:"schema"`
	TableName string  `json:"table_name"`
}
