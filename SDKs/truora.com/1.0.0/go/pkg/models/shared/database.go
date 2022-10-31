package shared



type Database struct {
    DataSets []string `json:"data_sets,omitempty"`
    DatabaseID *string `json:"database_id,omitempty"`
    DatabaseName *string `json:"database_name,omitempty"`
    HourlyStatus []string `json:"hourly_status,omitempty"`
    
}

