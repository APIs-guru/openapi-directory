package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMembersIDPortraitURLPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDPortraitURLRequest struct {
	PathParams GetAPIMembersIDPortraitURLPathParams
}

type GetAPIMembersIDPortraitURLResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	StringItem  *shared.StringItem
}
