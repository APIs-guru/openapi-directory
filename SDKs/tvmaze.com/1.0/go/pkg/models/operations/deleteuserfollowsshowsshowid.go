package operations

type DeleteUserFollowsShowsShowIDPathParams struct {
	ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
}

type DeleteUserFollowsShowsShowIDRequest struct {
	PathParams DeleteUserFollowsShowsShowIDPathParams
}

type DeleteUserFollowsShowsShowIDResponse struct {
	ContentType string
	StatusCode  int64
}
