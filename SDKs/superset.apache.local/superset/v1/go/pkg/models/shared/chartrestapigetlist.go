package shared



type ChartRestAPIGetList struct {
    CacheTimeout *int32 `json:"cache_timeout,omitempty"`
    ChangedBy *Meta8 `json:"changed_by,omitempty"`
    ChangedByName *interface{} `json:"changed_by_name,omitempty"`
    ChangedByURL *interface{} `json:"changed_by_url,omitempty"`
    ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized,omitempty"`
    ChangedOnUtc *interface{} `json:"changed_on_utc,omitempty"`
    CreatedBy *Meta5 `json:"created_by,omitempty"`
    DatasourceID *int32 `json:"datasource_id,omitempty"`
    DatasourceNameText *interface{} `json:"datasource_name_text,omitempty"`
    DatasourceType *string `json:"datasource_type,omitempty"`
    DatasourceURL *interface{} `json:"datasource_url,omitempty"`
    Description *string `json:"description,omitempty"`
    DescriptionMarkeddown *interface{} `json:"description_markeddown,omitempty"`
    EditURL *interface{} `json:"edit_url,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Owners *Meta7 `json:"owners,omitempty"`
    Params *string `json:"params,omitempty"`
    SliceName *string `json:"slice_name,omitempty"`
    Table *Meta6 `json:"table,omitempty"`
    ThumbnailURL *interface{} `json:"thumbnail_url,omitempty"`
    URL *interface{} `json:"url,omitempty"`
    VizType *string `json:"viz_type,omitempty"`
    
}

