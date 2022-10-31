package shared

type ChartEntityResponseSchema struct {
	CacheTimeout          *int32                 `json:"cache_timeout,omitempty"`
	ChangedOn             *string                `json:"changed_on,omitempty"`
	Datasource            *string                `json:"datasource,omitempty"`
	Description           *string                `json:"description,omitempty"`
	DescriptionMarkeddown *string                `json:"description_markeddown,omitempty"`
	FormData              map[string]interface{} `json:"form_data,omitempty"`
	Modified              *string                `json:"modified,omitempty"`
	SliceID               *int32                 `json:"slice_id,omitempty"`
	SliceName             *string                `json:"slice_name,omitempty"`
	SliceURL              *string                `json:"slice_url,omitempty"`
}
