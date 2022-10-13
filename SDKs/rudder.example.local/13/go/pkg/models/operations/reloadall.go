package operations

type ReloadAll200ApplicationJSONActionEnum string

const (
	ReloadAll200ApplicationJSONActionEnumReloadAll ReloadAll200ApplicationJSONActionEnum = "reloadAll"
)

type ReloadAll200ApplicationJSONDataGroupsEnum string

const (
	ReloadAll200ApplicationJSONDataGroupsEnumStarted ReloadAll200ApplicationJSONDataGroupsEnum = "Started"
)

type ReloadAll200ApplicationJSONDataTechniquesEnum string

const (
	ReloadAll200ApplicationJSONDataTechniquesEnumStarted ReloadAll200ApplicationJSONDataTechniquesEnum = "Started"
)

type ReloadAll200ApplicationJSONData struct {
	Groups     ReloadAll200ApplicationJSONDataGroupsEnum     `json:"groups"`
	Techniques ReloadAll200ApplicationJSONDataTechniquesEnum `json:"techniques"`
}

type ReloadAll200ApplicationJSONResultEnum string

const (
	ReloadAll200ApplicationJSONResultEnumSuccess ReloadAll200ApplicationJSONResultEnum = "success"
	ReloadAll200ApplicationJSONResultEnumError   ReloadAll200ApplicationJSONResultEnum = "error"
)

type ReloadAll200ApplicationJSON struct {
	Action ReloadAll200ApplicationJSONActionEnum `json:"action"`
	Data   ReloadAll200ApplicationJSONData       `json:"data"`
	Result ReloadAll200ApplicationJSONResultEnum `json:"result"`
}

type ReloadAllResponse struct {
	ContentType                       string
	StatusCode                        int64
	ReloadAll200ApplicationJSONObject *ReloadAll200ApplicationJSON
}
