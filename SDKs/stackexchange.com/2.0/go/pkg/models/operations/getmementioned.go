package operations

type GetMeMentionedOrderEnum string

const (
	GetMeMentionedOrderEnumDesc GetMeMentionedOrderEnum = "desc"
	GetMeMentionedOrderEnumAsc  GetMeMentionedOrderEnum = "asc"
)

type GetMeMentionedSortEnum string

const (
	GetMeMentionedSortEnumCreation GetMeMentionedSortEnum = "creation"
	GetMeMentionedSortEnumVotes    GetMeMentionedSortEnum = "votes"
)

type GetMeMentionedQueryParams struct {
	Callback *string                  `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                  `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                   `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                  `queryParam:"style=form,explode=true,name=max"`
	Min      *string                  `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeMentionedOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                   `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                   `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                   `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeMentionedSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                   `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeMentionedRequest struct {
	QueryParams GetMeMentionedQueryParams
}

type GetMeMentionedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
