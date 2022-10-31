package operations

type UpdateCveCheckConfigurationRequestBody struct {
	APIKey *string `json:"apiKey,omitempty"`
	URL    *string `json:"url,omitempty"`
}

type UpdateCveCheckConfigurationRequest struct {
	Request *UpdateCveCheckConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateCveCheckConfiguration200ApplicationJSONActionEnum string

const (
	UpdateCveCheckConfiguration200ApplicationJSONActionEnumUpdateCveCheckConfiguration UpdateCveCheckConfiguration200ApplicationJSONActionEnum = "updateCVECheckConfiguration"
)

type UpdateCveCheckConfiguration200ApplicationJSONData struct {
	APIKey *string `json:"apiKey,omitempty"`
	URL    *string `json:"url,omitempty"`
}

type UpdateCveCheckConfiguration200ApplicationJSONResultEnum string

const (
	UpdateCveCheckConfiguration200ApplicationJSONResultEnumSuccess UpdateCveCheckConfiguration200ApplicationJSONResultEnum = "success"
	UpdateCveCheckConfiguration200ApplicationJSONResultEnumError   UpdateCveCheckConfiguration200ApplicationJSONResultEnum = "error"
)

type UpdateCveCheckConfiguration200ApplicationJSON struct {
	Action UpdateCveCheckConfiguration200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateCveCheckConfiguration200ApplicationJSONData       `json:"data"`
	Result UpdateCveCheckConfiguration200ApplicationJSONResultEnum `json:"result"`
}

type UpdateCveCheckConfigurationResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	UpdateCveCheckConfiguration200ApplicationJSONObject *UpdateCveCheckConfiguration200ApplicationJSON
}
