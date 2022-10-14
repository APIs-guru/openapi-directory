package shared

type DatasetRelatedDashboards struct {
	Count  *int32                    `json:"count,omitempty"`
	Result []DatasetRelatedDashboard `json:"result,omitempty"`
}
