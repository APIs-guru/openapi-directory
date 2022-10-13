package operations

type DeleteUserTagsTagIDPathParams struct {
	TagID int64 `pathParam:"style=simple,explode=false,name=tag_id"`
}

type DeleteUserTagsTagIDRequest struct {
	PathParams DeleteUserTagsTagIDPathParams
}

type DeleteUserTagsTagIDResponse struct {
	ContentType string
	StatusCode  int64
}
