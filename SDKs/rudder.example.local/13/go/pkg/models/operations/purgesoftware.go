package operations

type PurgeSoftware200ApplicationJSONActionEnum string

const (
	PurgeSoftware200ApplicationJSONActionEnumPurgeSoftware PurgeSoftware200ApplicationJSONActionEnum = "purgeSoftware"
)

type PurgeSoftware200ApplicationJSONResultEnum string

const (
	PurgeSoftware200ApplicationJSONResultEnumSuccess PurgeSoftware200ApplicationJSONResultEnum = "success"
	PurgeSoftware200ApplicationJSONResultEnumError   PurgeSoftware200ApplicationJSONResultEnum = "error"
)

type PurgeSoftware200ApplicationJSON struct {
	Action PurgeSoftware200ApplicationJSONActionEnum `json:"action"`
	Data   []string                                  `json:"data"`
	Result PurgeSoftware200ApplicationJSONResultEnum `json:"result"`
}

type PurgeSoftwareResponse struct {
	ContentType                           string
	StatusCode                            int64
	PurgeSoftware200ApplicationJSONObject *PurgeSoftware200ApplicationJSON
}
