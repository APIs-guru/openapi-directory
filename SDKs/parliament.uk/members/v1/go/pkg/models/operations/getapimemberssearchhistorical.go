package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIMembersSearchHistoricalQueryParams struct {
	DateToSearchFor *time.Time `queryParam:"style=form,explode=true,name=dateToSearchFor"`
	Name            *string    `queryParam:"style=form,explode=true,name=name"`
	Skip            *int32     `queryParam:"style=form,explode=true,name=skip"`
	Take            *int32     `queryParam:"style=form,explode=true,name=take"`
}

type GetAPIMembersSearchHistoricalRequest struct {
	QueryParams GetAPIMembersSearchHistoricalQueryParams
}

type GetAPIMembersSearchHistoricalResponse struct {
	Body                             []byte
	ContentType                      string
	MemberMembersServiceSearchResult *shared.MemberMembersServiceSearchResult
	StatusCode                       int64
}
