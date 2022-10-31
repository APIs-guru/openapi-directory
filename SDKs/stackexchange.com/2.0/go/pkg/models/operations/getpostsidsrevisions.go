package operations

type GetPostsIdsRevisionsPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetPostsIdsRevisionsQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64  `queryParam:"style=form,explode=true,name=fromdate"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64  `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string  `queryParam:"style=form,explode=true,name=site"`
	Todate   *int64  `queryParam:"style=form,explode=true,name=todate"`
}

type GetPostsIdsRevisionsRequest struct {
	PathParams  GetPostsIdsRevisionsPathParams
	QueryParams GetPostsIdsRevisionsQueryParams
}

type GetPostsIdsRevisionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
