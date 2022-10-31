package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPILocationConstituencyIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPILocationConstituencyIDRequest struct {
	PathParams GetAPILocationConstituencyIDPathParams
}

type GetAPILocationConstituencyIDResponse struct {
	Body             []byte
	ConstituencyItem *shared.ConstituencyItem
	ContentType      string
	StatusCode       int64
}
