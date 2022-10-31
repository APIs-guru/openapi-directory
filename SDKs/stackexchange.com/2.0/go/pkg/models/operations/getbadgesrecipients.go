package operations

type GetBadgesRecipientsQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64  `queryParam:"style=form,explode=true,name=fromdate"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64  `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string  `queryParam:"style=form,explode=true,name=site"`
	Todate   *int64  `queryParam:"style=form,explode=true,name=todate"`
}

type GetBadgesRecipientsRequest struct {
	QueryParams GetBadgesRecipientsQueryParams
}

type GetBadgesRecipientsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
