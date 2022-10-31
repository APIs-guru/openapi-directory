package operations

type GetMeTagsOrderEnum string

const (
	GetMeTagsOrderEnumDesc GetMeTagsOrderEnum = "desc"
	GetMeTagsOrderEnumAsc  GetMeTagsOrderEnum = "asc"
)

type GetMeTagsSortEnum string

const (
	GetMeTagsSortEnumPopular  GetMeTagsSortEnum = "popular"
	GetMeTagsSortEnumActivity GetMeTagsSortEnum = "activity"
	GetMeTagsSortEnumName     GetMeTagsSortEnum = "name"
)

type GetMeTagsQueryParams struct {
	Callback *string             `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string             `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64              `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string             `queryParam:"style=form,explode=true,name=max"`
	Min      *string             `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeTagsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64              `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64              `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string              `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeTagsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64              `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeTagsRequest struct {
	QueryParams GetMeTagsQueryParams
}

type GetMeTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
