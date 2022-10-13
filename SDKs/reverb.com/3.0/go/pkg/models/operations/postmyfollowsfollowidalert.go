package operations

type PostMyFollowsFollowIDAlertPathParams struct {
	FollowID string `pathParam:"style=simple,explode=false,name=follow_id"`
}

type PostMyFollowsFollowIDAlertRequest struct {
	PathParams PostMyFollowsFollowIDAlertPathParams
}

type PostMyFollowsFollowIDAlertResponse struct {
	ContentType string
	StatusCode  int64
}
