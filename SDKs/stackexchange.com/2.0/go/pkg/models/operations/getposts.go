package operations

type GetPostsOrderEnum string

const (
	GetPostsOrderEnumDesc GetPostsOrderEnum = "desc"
	GetPostsOrderEnumAsc  GetPostsOrderEnum = "asc"
)

type GetPostsSortEnum string

const (
	GetPostsSortEnumActivity GetPostsSortEnum = "activity"
	GetPostsSortEnumCreation GetPostsSortEnum = "creation"
	GetPostsSortEnumVotes    GetPostsSortEnum = "votes"
)

type GetPostsQueryParams struct {
	Callback *string            `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string            `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64             `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string            `queryParam:"style=form,explode=true,name=max"`
	Min      *string            `queryParam:"style=form,explode=true,name=min"`
	Order    *GetPostsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64             `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64             `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string             `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetPostsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64             `queryParam:"style=form,explode=true,name=todate"`
}

type GetPostsRequest struct {
	QueryParams GetPostsQueryParams
}

type GetPostsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
