package operations

type GetUsersIDTopAnswerTagsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersIDTopAnswerTagsQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64  `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string  `queryParam:"style=form,explode=true,name=site"`
}

type GetUsersIDTopAnswerTagsRequest struct {
	PathParams  GetUsersIDTopAnswerTagsPathParams
	QueryParams GetUsersIDTopAnswerTagsQueryParams
}

type GetUsersIDTopAnswerTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
