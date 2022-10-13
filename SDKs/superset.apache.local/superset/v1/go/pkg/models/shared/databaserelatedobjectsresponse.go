package shared

type DatabaseRelatedObjectsResponse struct {
	Charts     *DatabaseRelatedCharts     `json:"charts"`
	Dashboards *DatabaseRelatedDashboards `json:"dashboards"`
}
