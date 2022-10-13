package shared

type DatabaseRelatedDashboards struct {
	Count  *int32                     `json:"count"`
	Result []DatabaseRelatedDashboard `json:"result"`
}
