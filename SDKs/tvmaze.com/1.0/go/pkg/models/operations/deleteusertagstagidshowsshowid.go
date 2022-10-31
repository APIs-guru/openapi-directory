package operations

type DeleteUserTagsTagIDShowsShowIDPathParams struct {
	ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
	TagID  int64 `pathParam:"style=simple,explode=false,name=tag_id"`
}

type DeleteUserTagsTagIDShowsShowIDRequest struct {
	PathParams DeleteUserTagsTagIDShowsShowIDPathParams
}

type DeleteUserTagsTagIDShowsShowIDResponse struct {
	ContentType string
	StatusCode  int64
}
