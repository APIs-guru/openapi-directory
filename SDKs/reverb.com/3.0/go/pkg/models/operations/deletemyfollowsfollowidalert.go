package operations

type DeleteMyFollowsFollowIDAlertPathParams struct {
	FollowID string `pathParam:"style=simple,explode=false,name=follow_id"`
}

type DeleteMyFollowsFollowIDAlertRequest struct {
	PathParams DeleteMyFollowsFollowIDAlertPathParams
}

type DeleteMyFollowsFollowIDAlertResponse struct {
	ContentType string
	StatusCode  int64
}
