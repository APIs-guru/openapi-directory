package shared

type ChartRestAPIGetList struct {
	CacheTimeout            *int32       `json:"cache_timeout"`
	ChangedBy               *Meta8       `json:"changed_by"`
	ChangedByName           *interface{} `json:"changed_by_name"`
	ChangedByURL            *interface{} `json:"changed_by_url"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized"`
	ChangedOnUtc            *interface{} `json:"changed_on_utc"`
	CreatedBy               *Meta5       `json:"created_by"`
	DatasourceID            *int32       `json:"datasource_id"`
	DatasourceNameText      *interface{} `json:"datasource_name_text"`
	DatasourceType          *string      `json:"datasource_type"`
	DatasourceURL           *interface{} `json:"datasource_url"`
	Description             *string      `json:"description"`
	DescriptionMarkeddown   *interface{} `json:"description_markeddown"`
	EditURL                 *interface{} `json:"edit_url"`
	ID                      *int32       `json:"id"`
	Owners                  *Meta7       `json:"owners"`
	Params                  *string      `json:"params"`
	SliceName               *string      `json:"slice_name"`
	Table                   *Meta6       `json:"table"`
	ThumbnailURL            *interface{} `json:"thumbnail_url"`
	URL                     *interface{} `json:"url"`
	VizType                 *string      `json:"viz_type"`
}
