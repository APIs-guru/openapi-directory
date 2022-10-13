package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllPayRunTagsPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayScheduleID string `pathParam:"style=simple,explode=false,name=PayScheduleId"`
}

type GetAllPayRunTagsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetAllPayRunTagsRequest struct {
	PathParams GetAllPayRunTagsPathParams
	Headers    GetAllPayRunTagsHeaders
}

type GetAllPayRunTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
