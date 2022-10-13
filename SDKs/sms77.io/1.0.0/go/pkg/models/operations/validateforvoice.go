package operations

type ValidateForVoiceQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Number   string  `queryParam:"style=form,explode=true,name=number"`
}

type ValidateForVoiceRequest struct {
	QueryParams ValidateForVoiceQueryParams
}

type ValidateForVoice200ApplicationJSON struct {
	Code    *string `json:"code"`
	Error   *string `json:"error"`
	Success *bool   `json:"success"`
}

type ValidateForVoiceResponse struct {
	ContentType                              string
	StatusCode                               int64
	ValidateForVoice200ApplicationJSONObject *ValidateForVoice200ApplicationJSON
}
