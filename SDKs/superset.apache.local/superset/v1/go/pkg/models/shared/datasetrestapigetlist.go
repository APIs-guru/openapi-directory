package shared

type DatasetRestAPIGetList struct {
	ChangedBy               *Meta19      `json:"changed_by,omitempty"`
	ChangedByName           *interface{} `json:"changed_by_name,omitempty"`
	ChangedByURL            *interface{} `json:"changed_by_url,omitempty"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized,omitempty"`
	ChangedOnUtc            *interface{} `json:"changed_on_utc,omitempty"`
	Database                Meta21       `json:"database"`
	DefaultEndpoint         *string      `json:"default_endpoint,omitempty"`
	ExploreURL              *interface{} `json:"explore_url,omitempty"`
	Extra                   *string      `json:"extra,omitempty"`
	ID                      *int32       `json:"id,omitempty"`
	Kind                    *interface{} `json:"kind,omitempty"`
	Owners                  *Meta20      `json:"owners,omitempty"`
	Schema                  *string      `json:"schema,omitempty"`
	SQL                     *string      `json:"sql,omitempty"`
	TableName               string       `json:"table_name"`
}
