package operations

type UserAPIDeleteFollowedTagPathParams struct {
	TagID int32 `pathParam:"style=simple,explode=false,name=tagId"`
}

type UserAPIDeleteFollowedTagRequest struct {
	PathParams UserAPIDeleteFollowedTagPathParams
}

type UserAPIDeleteFollowedTagResponse struct {
	ContentType string
	StatusCode  int64
}
