package operations

import (
	"openapi/pkg/models/shared"
)

type SubUserGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type SubUserGetRequest struct {
	PathParams SubUserGetPathParams
}

type SubUserGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	SubUserData *shared.SubUserData
}
