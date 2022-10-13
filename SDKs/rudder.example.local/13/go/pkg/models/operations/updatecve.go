package operations

type UpdateCveRequestBody struct {
	URL   *string  `json:"url"`
	Years []string `json:"years"`
}

type UpdateCveRequest struct {
	Request *UpdateCveRequestBody `request:"mediaType=application/json"`
}

type UpdateCve200ApplicationJSONActionEnum string

const (
	UpdateCve200ApplicationJSONActionEnumUpdateCve UpdateCve200ApplicationJSONActionEnum = "updateCVE"
)

type UpdateCve200ApplicationJSONData struct {
	CvEs int64 `json:"CVEs"`
}

type UpdateCve200ApplicationJSONResultEnum string

const (
	UpdateCve200ApplicationJSONResultEnumSuccess UpdateCve200ApplicationJSONResultEnum = "success"
	UpdateCve200ApplicationJSONResultEnumError   UpdateCve200ApplicationJSONResultEnum = "error"
)

type UpdateCve200ApplicationJSON struct {
	Action UpdateCve200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateCve200ApplicationJSONData       `json:"data"`
	Result UpdateCve200ApplicationJSONResultEnum `json:"result"`
}

type UpdateCveResponse struct {
	ContentType                       string
	StatusCode                        int64
	UpdateCve200ApplicationJSONObject *UpdateCve200ApplicationJSON
}
