package operations

type StopPointDirectionPathParams struct {
	ID            string `pathParam:"style=simple,explode=false,name=id"`
	ToStopPointID string `pathParam:"style=simple,explode=false,name=toStopPointId"`
}

type StopPointDirectionQueryParams struct {
	LineID *string `queryParam:"style=form,explode=true,name=lineId"`
}

type StopPointDirectionRequest struct {
	PathParams  StopPointDirectionPathParams
	QueryParams StopPointDirectionQueryParams
}

type StopPointDirectionResponse struct {
	ContentType                                string
	StatusCode                                 int64
	StopPointDirection200ApplicationJSONString *string
	StopPointDirection200ApplicationXMLString  *string
	StopPointDirection200TextJSONString        *string
	StopPointDirection200TextXMLString         *string
}
