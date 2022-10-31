package operations

type GetTagsSynonymsOrderEnum string

const (
	GetTagsSynonymsOrderEnumDesc GetTagsSynonymsOrderEnum = "desc"
	GetTagsSynonymsOrderEnumAsc  GetTagsSynonymsOrderEnum = "asc"
)

type GetTagsSynonymsSortEnum string

const (
	GetTagsSynonymsSortEnumCreation GetTagsSynonymsSortEnum = "creation"
	GetTagsSynonymsSortEnumApplied  GetTagsSynonymsSortEnum = "applied"
	GetTagsSynonymsSortEnumActivity GetTagsSynonymsSortEnum = "activity"
)

type GetTagsSynonymsQueryParams struct {
	Callback *string                   `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                   `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                    `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                   `queryParam:"style=form,explode=true,name=max"`
	Min      *string                   `queryParam:"style=form,explode=true,name=min"`
	Order    *GetTagsSynonymsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                    `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                    `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                    `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetTagsSynonymsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                    `queryParam:"style=form,explode=true,name=todate"`
}

type GetTagsSynonymsRequest struct {
	QueryParams GetTagsSynonymsQueryParams
}

type GetTagsSynonymsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
