package operations

type GetUsersIdsAssociatedPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetUsersIdsAssociatedQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64  `queryParam:"style=form,explode=true,name=pagesize"`
}

type GetUsersIdsAssociatedRequest struct {
	PathParams  GetUsersIdsAssociatedPathParams
	QueryParams GetUsersIdsAssociatedQueryParams
}

type GetUsersIdsAssociatedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
