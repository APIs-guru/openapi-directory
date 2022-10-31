package operations

type FastSendDeviceValuesGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FastSendDeviceValuesGetRequest struct {
	PathParams FastSendDeviceValuesGetPathParams
}

type FastSendDeviceValuesGetResponse struct {
	ContentType string
	StatusCode  int64
}
