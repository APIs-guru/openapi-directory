package shared

type DatabaseRelatedDashboards struct {
	Count  *int32                     `json:"count,omitempty"`
	Result []DatabaseRelatedDashboard `json:"result,omitempty"`
}
