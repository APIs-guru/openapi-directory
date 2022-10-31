package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPILocationConstituencyIDSynopsisPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPILocationConstituencyIDSynopsisRequest struct {
	PathParams GetAPILocationConstituencyIDSynopsisPathParams
}

type GetAPILocationConstituencyIDSynopsisResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	StringItem  *shared.StringItem
}
