package operations

type HealthCheckHeaders struct {
	AcceptLanguage string `header:"name=Accept-Language"`
}

type HealthCheckRequest struct {
	Headers HealthCheckHeaders
}

type HealthCheck200ApplicationJSON struct {
	AllGood     *bool   `json:"allGood,omitempty"`
	CapiOk      *bool   `json:"capiOk,omitempty"`
	DbOk        *bool   `json:"dbOk,omitempty"`
	MemcachedOk *bool   `json:"memcachedOk,omitempty"`
	Message     *string `json:"message,omitempty"`
}

type HealthCheckResponse struct {
	ContentType                         string
	StatusCode                          int64
	HealthCheck200ApplicationJSONObject *HealthCheck200ApplicationJSON
}
