package shared

type ChartEntityResponseSchema struct {
	CacheTimeout          *int32                 `json:"cache_timeout"`
	ChangedOn             *string                `json:"changed_on"`
	Datasource            *string                `json:"datasource"`
	Description           *string                `json:"description"`
	DescriptionMarkeddown *string                `json:"description_markeddown"`
	FormData              map[string]interface{} `json:"form_data"`
	Modified              *string                `json:"modified"`
	SliceID               *int32                 `json:"slice_id"`
	SliceName             *string                `json:"slice_name"`
	SliceURL              *string                `json:"slice_url"`
}
