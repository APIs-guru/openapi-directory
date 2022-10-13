package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetUsersRequest struct {
	Headers GetUsersHeaders
}

type GetUsersResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
