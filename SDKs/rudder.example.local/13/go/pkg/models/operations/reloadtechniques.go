package operations

type ReloadTechniques200ApplicationJSONActionEnum string

const (
	ReloadTechniques200ApplicationJSONActionEnumReloadTechniques ReloadTechniques200ApplicationJSONActionEnum = "reloadTechniques"
)

type ReloadTechniques200ApplicationJSONDataTechniquesEnum string

const (
	ReloadTechniques200ApplicationJSONDataTechniquesEnumStarted ReloadTechniques200ApplicationJSONDataTechniquesEnum = "Started"
)

type ReloadTechniques200ApplicationJSONData struct {
	Techniques ReloadTechniques200ApplicationJSONDataTechniquesEnum `json:"techniques"`
}

type ReloadTechniques200ApplicationJSONResultEnum string

const (
	ReloadTechniques200ApplicationJSONResultEnumSuccess ReloadTechniques200ApplicationJSONResultEnum = "success"
	ReloadTechniques200ApplicationJSONResultEnumError   ReloadTechniques200ApplicationJSONResultEnum = "error"
)

type ReloadTechniques200ApplicationJSON struct {
	Action ReloadTechniques200ApplicationJSONActionEnum `json:"action"`
	Data   ReloadTechniques200ApplicationJSONData       `json:"data"`
	Result ReloadTechniques200ApplicationJSONResultEnum `json:"result"`
}

type ReloadTechniquesResponse struct {
	ContentType                              string
	StatusCode                               int64
	ReloadTechniques200ApplicationJSONObject *ReloadTechniques200ApplicationJSON
}
