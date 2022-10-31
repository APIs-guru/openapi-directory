package shared

type ChartRestAPIGet struct {
	CacheTimeout *int32  `json:"cache_timeout,omitempty"`
	Dashboards   *Meta9  `json:"dashboards,omitempty"`
	Description  *string `json:"description,omitempty"`
	Owners       *Meta10 `json:"owners,omitempty"`
	Params       *string `json:"params,omitempty"`
	QueryContext *string `json:"query_context,omitempty"`
	SliceName    *string `json:"slice_name,omitempty"`
	VizType      *string `json:"viz_type,omitempty"`
}
