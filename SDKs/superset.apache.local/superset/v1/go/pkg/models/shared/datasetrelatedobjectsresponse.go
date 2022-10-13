package shared

type DatasetRelatedObjectsResponse struct {
	Charts     *DatasetRelatedCharts     `json:"charts"`
	Dashboards *DatasetRelatedDashboards `json:"dashboards"`
}
