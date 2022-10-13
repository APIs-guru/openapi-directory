package operations

type GetAPIV2PredictionsHeaders struct {
	XRapidAPIKey *string `header:"name=X-RapidApi-Key"`
}

type GetAPIV2PredictionsRequest struct {
	Headers GetAPIV2PredictionsHeaders
}

type GetAPIV2Predictions404ApplicationJSON struct {
	Errors map[string]interface{} `json:"errors"`
}

type GetAPIV2PredictionsResponse struct {
	ContentType                                 string
	GetAPIV2Predictions404ApplicationJSONObject *GetAPIV2Predictions404ApplicationJSON
	StatusCode                                  int64
}
