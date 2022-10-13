package operations

type HealthCheckHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type HealthCheckRequest struct {
	Headers HealthCheckHeaders
}

type HealthCheck200ApplicationJSON struct {
	AllGood     *bool   `json:"allGood"`
	CapiOk      *bool   `json:"capiOk"`
	DbOk        *bool   `json:"dbOk"`
	MemcachedOk *bool   `json:"memcachedOk"`
	Message     *string `json:"message"`
}

type HealthCheckResponse struct {
	ContentType                         string
	StatusCode                          int64
	HealthCheck200ApplicationJSONObject *HealthCheck200ApplicationJSON
}
