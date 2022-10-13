package shared

type Database struct {
	DataSets     []string `json:"data_sets"`
	DatabaseID   *string  `json:"database_id"`
	DatabaseName *string  `json:"database_name"`
	HourlyStatus []string `json:"hourly_status"`
}
