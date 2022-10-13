package shared

type ChartRestAPIGet struct {
	CacheTimeout *int32  `json:"cache_timeout"`
	Dashboards   *Meta9  `json:"dashboards"`
	Description  *string `json:"description"`
	Owners       *Meta10 `json:"owners"`
	Params       *string `json:"params"`
	QueryContext *string `json:"query_context"`
	SliceName    *string `json:"slice_name"`
	VizType      *string `json:"viz_type"`
}
