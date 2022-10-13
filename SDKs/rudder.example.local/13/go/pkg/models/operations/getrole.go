package operations

type GetRole200ApplicationJSONActionEnum string

const (
	GetRole200ApplicationJSONActionEnumGetRole GetRole200ApplicationJSONActionEnum = "getRole"
)

type GetRole200ApplicationJSONDataIDEnum string

const (
	GetRole200ApplicationJSONDataIDEnumInventory     GetRole200ApplicationJSONDataIDEnum = "inventory"
	GetRole200ApplicationJSONDataIDEnumCompliance    GetRole200ApplicationJSONDataIDEnum = "compliance"
	GetRole200ApplicationJSONDataIDEnumAdministrator GetRole200ApplicationJSONDataIDEnum = "administrator"
	GetRole200ApplicationJSONDataIDEnumEtc           GetRole200ApplicationJSONDataIDEnum = "etc"
)

type GetRole200ApplicationJSONDataRightsEnum string

const (
	GetRole200ApplicationJSONDataRightsEnumNodeRead       GetRole200ApplicationJSONDataRightsEnum = "node_read"
	GetRole200ApplicationJSONDataRightsEnumUserAccountAll GetRole200ApplicationJSONDataRightsEnum = "userAccount_all"
)

type GetRole200ApplicationJSONData struct {
	ID     GetRole200ApplicationJSONDataIDEnum       `json:"id"`
	Rights []GetRole200ApplicationJSONDataRightsEnum `json:"rights"`
}

type GetRole200ApplicationJSONResultEnum string

const (
	GetRole200ApplicationJSONResultEnumSuccess GetRole200ApplicationJSONResultEnum = "success"
	GetRole200ApplicationJSONResultEnumError   GetRole200ApplicationJSONResultEnum = "error"
)

type GetRole200ApplicationJSON struct {
	Action GetRole200ApplicationJSONActionEnum `json:"action"`
	Data   []GetRole200ApplicationJSONData     `json:"data"`
	Result GetRole200ApplicationJSONResultEnum `json:"result"`
}

type GetRoleResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetRole200ApplicationJSONObject *GetRole200ApplicationJSON
}
