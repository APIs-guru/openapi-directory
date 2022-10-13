package operations

type GetDeviceMonitorsPathParams struct {
	DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
}

type GetDeviceMonitorsRequest struct {
	PathParams GetDeviceMonitorsPathParams
}

type GetDeviceMonitorsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
