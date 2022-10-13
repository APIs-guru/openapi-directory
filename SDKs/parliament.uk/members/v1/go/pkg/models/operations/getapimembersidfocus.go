package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMembersIDFocusPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDFocusRequest struct {
	PathParams GetAPIMembersIDFocusPathParams
}

type GetAPIMembersIDFocusResponse struct {
	Body                []byte
	ContentType         string
	MemberFocusListItem *shared.MemberFocusListItem
	StatusCode          int64
}
