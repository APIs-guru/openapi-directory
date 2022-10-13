package operations

type BookmarkPostPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type BookmarkPostRequest struct {
	PathParams BookmarkPostPathParams
}

type BookmarkPostResponse struct {
	ContentType string
	StatusCode  int64
}
