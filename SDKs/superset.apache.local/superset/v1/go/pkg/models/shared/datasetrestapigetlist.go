package shared

type DatasetRestAPIGetList struct {
	ChangedBy               *Meta19      `json:"changed_by"`
	ChangedByName           *interface{} `json:"changed_by_name"`
	ChangedByURL            *interface{} `json:"changed_by_url"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized"`
	ChangedOnUtc            *interface{} `json:"changed_on_utc"`
	Database                Meta21       `json:"database"`
	DefaultEndpoint         *string      `json:"default_endpoint"`
	ExploreURL              *interface{} `json:"explore_url"`
	Extra                   *string      `json:"extra"`
	ID                      *int32       `json:"id"`
	Kind                    *interface{} `json:"kind"`
	Owners                  *Meta20      `json:"owners"`
	Schema                  *string      `json:"schema"`
	SQL                     *string      `json:"sql"`
	TableName               string       `json:"table_name"`
}
