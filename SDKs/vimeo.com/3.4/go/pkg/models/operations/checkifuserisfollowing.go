package operations

import (
	"openapi/pkg/models/shared"
)

type CheckIfUserIsFollowingPathParams struct {
	FollowUserID float64 `pathParam:"style=simple,explode=false,name=follow_user_id"`
	UserID       float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type CheckIfUserIsFollowingRequest struct {
	PathParams CheckIfUserIsFollowingPathParams
}

type CheckIfUserIsFollowingResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
