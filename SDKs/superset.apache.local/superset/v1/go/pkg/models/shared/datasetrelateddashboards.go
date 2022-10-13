package shared

type DatasetRelatedDashboards struct {
	Count  *int32                    `json:"count"`
	Result []DatasetRelatedDashboard `json:"result"`
}
