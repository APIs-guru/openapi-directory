package operations

type GetNumbersAreacodes200ApplicationJSON struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetNumbersAreacodesResponse struct {
	ContentType                                 string
	GetNumbersAreacodes200ApplicationJSONObject *GetNumbersAreacodes200ApplicationJSON
	StatusCode                                  int64
}
