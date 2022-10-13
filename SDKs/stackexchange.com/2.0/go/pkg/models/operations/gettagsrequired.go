package operations

type GetTagsRequiredOrderEnum string

const (
	GetTagsRequiredOrderEnumDesc GetTagsRequiredOrderEnum = "desc"
	GetTagsRequiredOrderEnumAsc  GetTagsRequiredOrderEnum = "asc"
)

type GetTagsRequiredSortEnum string

const (
	GetTagsRequiredSortEnumPopular  GetTagsRequiredSortEnum = "popular"
	GetTagsRequiredSortEnumActivity GetTagsRequiredSortEnum = "activity"
	GetTagsRequiredSortEnumName     GetTagsRequiredSortEnum = "name"
)

type GetTagsRequiredQueryParams struct {
	Callback *string                   `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                   `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                    `queryParam:"style=form,explode=true,name=fromdate"`
	Inname   *string                   `queryParam:"style=form,explode=true,name=inname"`
	Max      *string                   `queryParam:"style=form,explode=true,name=max"`
	Min      *string                   `queryParam:"style=form,explode=true,name=min"`
	Order    *GetTagsRequiredOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                    `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                    `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                    `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetTagsRequiredSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                    `queryParam:"style=form,explode=true,name=todate"`
}

type GetTagsRequiredRequest struct {
	QueryParams GetTagsRequiredQueryParams
}

type GetTagsRequiredResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
