package operations

type UserAPIDeleteMessagesPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type UserAPIDeleteMessagesQueryParams struct {
	MessageID []int32 `queryParam:"style=form,explode=true,name=messageId"`
}

type UserAPIDeleteMessagesRequest struct {
	PathParams  UserAPIDeleteMessagesPathParams
	QueryParams UserAPIDeleteMessagesQueryParams
}

type UserAPIDeleteMessagesResponse struct {
	ContentType string
	StatusCode  int64
}
