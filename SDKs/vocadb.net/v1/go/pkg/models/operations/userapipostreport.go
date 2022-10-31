package operations

import (
	"openapi/pkg/models/shared"
)

type UserAPIPostReportPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type UserAPIPostReportRequests struct {
	ApplicationXML     []byte                    `request:"mediaType=application/xml"`
	CreateReportModel  *shared.CreateReportModel `request:"mediaType=application/json"`
	CreateReportModel1 *shared.CreateReportModel `request:"mediaType=application/x-www-form-urlencoded"`
	CreateReportModel2 *shared.CreateReportModel `request:"mediaType=text/json"`
	TextXML            []byte                    `request:"mediaType=text/xml"`
}

type UserAPIPostReportRequest struct {
	PathParams UserAPIPostReportPathParams
	Request    UserAPIPostReportRequests
}

type UserAPIPostReportResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	UserAPIPostReport200ApplicationJSONBoolean  *bool
	UserAPIPostReport200ApplicationJsonpBoolean *bool
	UserAPIPostReport200TextJSONBoolean         *bool
}
