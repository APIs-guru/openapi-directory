package operations

type RediscoverPathParams struct {
	DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
}

type RediscoverRequest struct {
	PathParams RediscoverPathParams
}

type RediscoverResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
