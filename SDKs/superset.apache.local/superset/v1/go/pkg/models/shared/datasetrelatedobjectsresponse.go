package shared



type DatasetRelatedObjectsResponse struct {
    Charts *DatasetRelatedCharts `json:"charts,omitempty"`
    Dashboards *DatasetRelatedDashboards `json:"dashboards,omitempty"`
    
}

