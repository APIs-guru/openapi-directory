package operations

type PostPostsIDCommentsAddPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostPostsIDCommentsAddQueryParams struct {
	Body     *string `queryParam:"style=form,explode=true,name=body"`
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Preview  *bool   `queryParam:"style=form,explode=true,name=preview"`
	Site     string  `queryParam:"style=form,explode=true,name=site"`
}

type PostPostsIDCommentsAddRequest struct {
	PathParams  PostPostsIDCommentsAddPathParams
	QueryParams PostPostsIDCommentsAddQueryParams
}

type PostPostsIDCommentsAddResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
