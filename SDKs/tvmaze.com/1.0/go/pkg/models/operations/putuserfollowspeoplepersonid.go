package operations

import (
	"openapi/pkg/models/shared"
)

type PutUserFollowsPeoplePersonIDPathParams struct {
	PersonID int64 `pathParam:"style=simple,explode=false,name=person_id"`
}

type PutUserFollowsPeoplePersonIDRequest struct {
	PathParams PutUserFollowsPeoplePersonIDPathParams
}

type PutUserFollowsPeoplePersonIDResponse struct {
	ContentType  string
	PersonFollow *shared.PersonFollow
	StatusCode   int64
}
