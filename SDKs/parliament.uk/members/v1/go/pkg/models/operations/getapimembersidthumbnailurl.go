package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMembersIDThumbnailURLPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDThumbnailURLRequest struct {
	PathParams GetAPIMembersIDThumbnailURLPathParams
}

type GetAPIMembersIDThumbnailURLResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	StringItem  *shared.StringItem
}
