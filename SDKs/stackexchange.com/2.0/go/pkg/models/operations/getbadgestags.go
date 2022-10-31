package operations

type GetBadgesTagsOrderEnum string

const (
	GetBadgesTagsOrderEnumDesc GetBadgesTagsOrderEnum = "desc"
	GetBadgesTagsOrderEnumAsc  GetBadgesTagsOrderEnum = "asc"
)

type GetBadgesTagsSortEnum string

const (
	GetBadgesTagsSortEnumRank GetBadgesTagsSortEnum = "rank"
	GetBadgesTagsSortEnumName GetBadgesTagsSortEnum = "name"
)

type GetBadgesTagsQueryParams struct {
	Callback *string                 `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                 `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                  `queryParam:"style=form,explode=true,name=fromdate"`
	Inname   *string                 `queryParam:"style=form,explode=true,name=inname"`
	Max      *string                 `queryParam:"style=form,explode=true,name=max"`
	Min      *string                 `queryParam:"style=form,explode=true,name=min"`
	Order    *GetBadgesTagsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                  `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                  `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetBadgesTagsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                  `queryParam:"style=form,explode=true,name=todate"`
}

type GetBadgesTagsRequest struct {
	QueryParams GetBadgesTagsQueryParams
}

type GetBadgesTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
