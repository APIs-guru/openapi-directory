package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserFollowsPeoplePersonIDPathParams struct {
	PersonID int64 `pathParam:"style=simple,explode=false,name=person_id"`
}

type GetUserFollowsPeoplePersonIDRequest struct {
	PathParams GetUserFollowsPeoplePersonIDPathParams
}

type GetUserFollowsPeoplePersonIDResponse struct {
	ContentType  string
	PersonFollow *shared.PersonFollow
	StatusCode   int64
}
