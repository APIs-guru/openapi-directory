package shared



type DatabaseRelatedObjectsResponse struct {
    Charts *DatabaseRelatedCharts `json:"charts,omitempty"`
    Dashboards *DatabaseRelatedDashboards `json:"dashboards,omitempty"`
    
}

