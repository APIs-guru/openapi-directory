package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfUserIsFollowingAlt1PathParams struct {
	FollowUserID float64 `pathParam:"style=simple,explode=false,name=follow_user_id"`
}

type CheckIfUserIsFollowingAlt1Request struct {
	PathParams CheckIfUserIsFollowingAlt1PathParams
}

type CheckIfUserIsFollowingAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
