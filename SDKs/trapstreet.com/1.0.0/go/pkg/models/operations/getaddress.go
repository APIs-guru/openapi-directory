package operations

type GetAddressPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type GetAddressRequest struct {
	PathParams GetAddressPathParams
}

type GetAddressResponse struct {
	ContentType                     string
	GetAddress200ApplicationJSONAny *interface{}
	StatusCode                      int64
}
