package operations

type GetTagsTagsWikisPathParams struct {
	Tags string `pathParam:"style=simple,explode=false,name=tags"`
}

type GetTagsTagsWikisQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64  `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string  `queryParam:"style=form,explode=true,name=site"`
}

type GetTagsTagsWikisRequest struct {
	PathParams  GetTagsTagsWikisPathParams
	QueryParams GetTagsTagsWikisQueryParams
}

type GetTagsTagsWikisResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
