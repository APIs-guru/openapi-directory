package operations

type GetDeviceParameterHistoryPathParams struct {
	DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
}

type GetDeviceParameterHistoryQueryParams struct {
	From          *int64  `queryParam:"style=form,explode=true,name=from"`
	MonitorSid    *string `queryParam:"style=form,explode=true,name=monitorSid"`
	MonitorType   string  `queryParam:"style=form,explode=true,name=monitorType"`
	ParameterName string  `queryParam:"style=form,explode=true,name=parameterName"`
	To            *int64  `queryParam:"style=form,explode=true,name=to"`
}

type GetDeviceParameterHistoryRequest struct {
	PathParams  GetDeviceParameterHistoryPathParams
	QueryParams GetDeviceParameterHistoryQueryParams
}

type GetDeviceParameterHistoryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
