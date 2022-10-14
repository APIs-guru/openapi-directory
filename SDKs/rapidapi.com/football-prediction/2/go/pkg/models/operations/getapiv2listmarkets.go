package operations

type GetAPIV2ListMarketsHeaders struct {
	XRapidAPIKey *string `header:"name=X-RapidApi-Key"`
}

type GetAPIV2ListMarketsRequest struct {
	Headers GetAPIV2ListMarketsHeaders
}

type GetAPIV2ListMarkets200ApplicationJSONData struct {
	All                        []string `json:"all,omitempty"`
	AllowedForYourSubscription []string `json:"allowed_for_your_subscription,omitempty"`
}

type GetAPIV2ListMarkets200ApplicationJSON struct {
	Data *GetAPIV2ListMarkets200ApplicationJSONData `json:"data,omitempty"`
}

type GetAPIV2ListMarkets404ApplicationJSON struct {
	Errors map[string]interface{} `json:"errors,omitempty"`
}

type GetAPIV2ListMarketsResponse struct {
	ContentType                                 string
	GetAPIV2ListMarkets200ApplicationJSONObject *GetAPIV2ListMarkets200ApplicationJSON
	GetAPIV2ListMarkets404ApplicationJSONObject *GetAPIV2ListMarkets404ApplicationJSON
	StatusCode                                  int64
}
