package operations

type GetDeviceAgentPathParams struct {
	DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
}

type GetDeviceAgentRequest struct {
	PathParams GetDeviceAgentPathParams
}

type GetDeviceAgentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
