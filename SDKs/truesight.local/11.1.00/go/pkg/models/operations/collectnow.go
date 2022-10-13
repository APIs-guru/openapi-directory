package operations

type CollectNowPathParams struct {
	DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
}

type CollectNowQueryParams struct {
	MonitorClass string `queryParam:"style=form,explode=true,name=monitorClass"`
}

type CollectNowRequest struct {
	PathParams  CollectNowPathParams
	QueryParams CollectNowQueryParams
}

type CollectNowResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
