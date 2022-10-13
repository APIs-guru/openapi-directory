package operations

type GetAPIV2PerformanceStatsHeaders struct {
	XRapidAPIKey *string `header:"name=X-RapidApi-Key"`
}

type GetAPIV2PerformanceStatsRequest struct {
	Headers GetAPIV2PerformanceStatsHeaders
}

type GetAPIV2PerformanceStats200ApplicationJSONDataAccuracy struct {
	Last14Days *float64 `json:"last_14_days"`
	Last30Days *float64 `json:"last_30_days"`
	Last7Days  *float64 `json:"last_7_days"`
	Yesterday  *float64 `json:"yesterday"`
}

type GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast14Days struct {
	Lost      *int64 `json:"lost"`
	Pending   *int64 `json:"pending"`
	Postponed *int64 `json:"postponed"`
	Total     *int64 `json:"total"`
	Won       *int64 `json:"won"`
}

type GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast30Days struct {
	Lost      *int64 `json:"lost"`
	Pending   *int64 `json:"pending"`
	Postponed *int64 `json:"postponed"`
	Total     *int64 `json:"total"`
	Won       *int64 `json:"won"`
}

type GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast7Days struct {
	Lost      *int64 `json:"lost"`
	Pending   *int64 `json:"pending"`
	Postponed *int64 `json:"postponed"`
	Total     *int64 `json:"total"`
	Won       *int64 `json:"won"`
}

type GetAPIV2PerformanceStats200ApplicationJSONDataDetailsYesterday struct {
	Lost      *int64 `json:"lost"`
	Pending   *int64 `json:"pending"`
	Postponed *int64 `json:"postponed"`
	Total     *int64 `json:"total"`
	Won       *int64 `json:"won"`
}

type GetAPIV2PerformanceStats200ApplicationJSONDataDetails struct {
	Last14Days *GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast14Days `json:"last_14_days"`
	Last30Days *GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast30Days `json:"last_30_days"`
	Last7Days  *GetAPIV2PerformanceStats200ApplicationJSONDataDetailsLast7Days  `json:"last_7_days"`
	Yesterday  *GetAPIV2PerformanceStats200ApplicationJSONDataDetailsYesterday  `json:"yesterday"`
}

type GetAPIV2PerformanceStats200ApplicationJSONData struct {
	Accuracy *GetAPIV2PerformanceStats200ApplicationJSONDataAccuracy `json:"accuracy"`
	Details  *GetAPIV2PerformanceStats200ApplicationJSONDataDetails  `json:"details"`
	Market   *string                                                 `json:"market"`
}

type GetAPIV2PerformanceStats200ApplicationJSON struct {
	Data *GetAPIV2PerformanceStats200ApplicationJSONData `json:"data"`
}

type GetAPIV2PerformanceStats404ApplicationJSON struct {
	Errors map[string]interface{} `json:"errors"`
}

type GetAPIV2PerformanceStatsResponse struct {
	ContentType                                      string
	GetAPIV2PerformanceStats200ApplicationJSONObject *GetAPIV2PerformanceStats200ApplicationJSON
	GetAPIV2PerformanceStats404ApplicationJSONObject *GetAPIV2PerformanceStats404ApplicationJSON
	StatusCode                                       int64
}
