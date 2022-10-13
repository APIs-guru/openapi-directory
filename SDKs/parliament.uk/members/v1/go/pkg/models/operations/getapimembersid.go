package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIMembersIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIMembersIDQueryParams struct {
	DetailsForDate *time.Time `queryParam:"style=form,explode=true,name=detailsForDate"`
}

type GetAPIMembersIDRequest struct {
	PathParams  GetAPIMembersIDPathParams
	QueryParams GetAPIMembersIDQueryParams
}

type GetAPIMembersIDResponse struct {
	Body        []byte
	ContentType string
	MemberItem  *shared.MemberItem
	StatusCode  int64
}
