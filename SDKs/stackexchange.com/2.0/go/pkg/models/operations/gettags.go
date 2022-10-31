package operations

type GetTagsOrderEnum string

const (
	GetTagsOrderEnumDesc GetTagsOrderEnum = "desc"
	GetTagsOrderEnumAsc  GetTagsOrderEnum = "asc"
)

type GetTagsSortEnum string

const (
	GetTagsSortEnumPopular  GetTagsSortEnum = "popular"
	GetTagsSortEnumActivity GetTagsSortEnum = "activity"
	GetTagsSortEnumName     GetTagsSortEnum = "name"
)

type GetTagsQueryParams struct {
	Callback *string           `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string           `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64            `queryParam:"style=form,explode=true,name=fromdate"`
	Inname   *string           `queryParam:"style=form,explode=true,name=inname"`
	Max      *string           `queryParam:"style=form,explode=true,name=max"`
	Min      *string           `queryParam:"style=form,explode=true,name=min"`
	Order    *GetTagsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64            `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64            `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string            `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetTagsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64            `queryParam:"style=form,explode=true,name=todate"`
}

type GetTagsRequest struct {
	QueryParams GetTagsQueryParams
}

type GetTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
