package operations

type GetMeCommentsToIDPathParams struct {
	ToID int64 `pathParam:"style=simple,explode=false,name=toId"`
}

type GetMeCommentsToIDOrderEnum string

const (
	GetMeCommentsToIDOrderEnumDesc GetMeCommentsToIDOrderEnum = "desc"
	GetMeCommentsToIDOrderEnumAsc  GetMeCommentsToIDOrderEnum = "asc"
)

type GetMeCommentsToIDSortEnum string

const (
	GetMeCommentsToIDSortEnumCreation GetMeCommentsToIDSortEnum = "creation"
	GetMeCommentsToIDSortEnumVotes    GetMeCommentsToIDSortEnum = "votes"
)

type GetMeCommentsToIDQueryParams struct {
	Callback *string                     `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                     `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                      `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                     `queryParam:"style=form,explode=true,name=max"`
	Min      *string                     `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeCommentsToIDOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                      `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                      `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                      `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeCommentsToIDSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                      `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeCommentsToIDRequest struct {
	PathParams  GetMeCommentsToIDPathParams
	QueryParams GetMeCommentsToIDQueryParams
}

type GetMeCommentsToIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
