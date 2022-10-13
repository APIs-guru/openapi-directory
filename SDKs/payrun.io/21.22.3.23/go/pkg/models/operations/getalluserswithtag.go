package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllUsersWithTagPathParams struct {
	TagID string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetAllUsersWithTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetAllUsersWithTagRequest struct {
	PathParams GetAllUsersWithTagPathParams
	Headers    GetAllUsersWithTagHeaders
}

type GetAllUsersWithTagResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
