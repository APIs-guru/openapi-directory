package operations

type GetAPIV2PredictionsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIV2PredictionsID200ApplicationJSON struct {
	Data []map[string]interface{} `json:"data,omitempty"`
}

type GetAPIV2PredictionsID404ApplicationJSON struct {
	Errors map[string]interface{} `json:"errors,omitempty"`
}

type GetAPIV2PredictionsIDRequest struct {
	PathParams GetAPIV2PredictionsIDPathParams
}

type GetAPIV2PredictionsIDResponse struct {
	ContentType                                   string
	GetAPIV2PredictionsID200ApplicationJSONObject *GetAPIV2PredictionsID200ApplicationJSON
	GetAPIV2PredictionsID404ApplicationJSONObject *GetAPIV2PredictionsID404ApplicationJSON
	StatusCode                                    int64
}
