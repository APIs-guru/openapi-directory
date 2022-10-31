package operations

type GetUsersIDTopQuestionTagsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersIDTopQuestionTagsQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64  `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string  `queryParam:"style=form,explode=true,name=site"`
}

type GetUsersIDTopQuestionTagsRequest struct {
	PathParams  GetUsersIDTopQuestionTagsPathParams
	QueryParams GetUsersIDTopQuestionTagsQueryParams
}

type GetUsersIDTopQuestionTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
