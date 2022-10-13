package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMembersIDSynopsisPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDSynopsisRequest struct {
	PathParams GetAPIMembersIDSynopsisPathParams
}

type GetAPIMembersIDSynopsisResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	StringItem  *shared.StringItem
}
