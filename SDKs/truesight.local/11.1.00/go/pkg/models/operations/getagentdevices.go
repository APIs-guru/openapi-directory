package operations

type GetAgentDevicesPathParams struct {
	DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
}

type GetAgentDevicesRequest struct {
	PathParams GetAgentDevicesPathParams
}

type GetAgentDevicesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
