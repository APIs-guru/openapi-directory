package operations

type GetUsersIdsMergesPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetUsersIdsMergesQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64  `queryParam:"style=form,explode=true,name=pagesize"`
}

type GetUsersIdsMergesRequest struct {
	PathParams  GetUsersIdsMergesPathParams
	QueryParams GetUsersIdsMergesQueryParams
}

type GetUsersIdsMergesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
