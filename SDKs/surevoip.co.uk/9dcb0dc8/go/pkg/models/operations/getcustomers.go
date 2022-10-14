package operations

type GetCustomers302ApplicationJSON struct {
	Location *string `json:"location,omitempty"`
}

type GetCustomersResponse struct {
	ContentType                          string
	GetCustomers302ApplicationJSONObject *GetCustomers302ApplicationJSON
	Headers                              map[string][]string
	StatusCode                           int64
}
