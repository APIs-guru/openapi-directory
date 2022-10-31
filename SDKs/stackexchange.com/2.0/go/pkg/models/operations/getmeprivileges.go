package operations

type GetMePrivilegesQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64  `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string  `queryParam:"style=form,explode=true,name=site"`
}

type GetMePrivilegesRequest struct {
	QueryParams GetMePrivilegesQueryParams
}

type GetMePrivilegesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
