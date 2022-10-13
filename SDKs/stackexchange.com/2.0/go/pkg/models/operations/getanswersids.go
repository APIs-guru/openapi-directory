package operations

type GetAnswersIdsPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetAnswersIdsOrderEnum string

const (
	GetAnswersIdsOrderEnumDesc GetAnswersIdsOrderEnum = "desc"
	GetAnswersIdsOrderEnumAsc  GetAnswersIdsOrderEnum = "asc"
)

type GetAnswersIdsSortEnum string

const (
	GetAnswersIdsSortEnumActivity GetAnswersIdsSortEnum = "activity"
	GetAnswersIdsSortEnumCreation GetAnswersIdsSortEnum = "creation"
	GetAnswersIdsSortEnumVotes    GetAnswersIdsSortEnum = "votes"
)

type GetAnswersIdsQueryParams struct {
	Callback *string                 `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                 `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                  `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                 `queryParam:"style=form,explode=true,name=max"`
	Min      *string                 `queryParam:"style=form,explode=true,name=min"`
	Order    *GetAnswersIdsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                  `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                  `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetAnswersIdsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                  `queryParam:"style=form,explode=true,name=todate"`
}

type GetAnswersIdsRequest struct {
	PathParams  GetAnswersIdsPathParams
	QueryParams GetAnswersIdsQueryParams
}

type GetAnswersIdsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
