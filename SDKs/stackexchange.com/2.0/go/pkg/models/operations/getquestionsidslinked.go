package operations

type GetQuestionsIdsLinkedPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetQuestionsIdsLinkedOrderEnum string

const (
	GetQuestionsIdsLinkedOrderEnumDesc GetQuestionsIdsLinkedOrderEnum = "desc"
	GetQuestionsIdsLinkedOrderEnumAsc  GetQuestionsIdsLinkedOrderEnum = "asc"
)

type GetQuestionsIdsLinkedSortEnum string

const (
	GetQuestionsIdsLinkedSortEnumActivity GetQuestionsIdsLinkedSortEnum = "activity"
	GetQuestionsIdsLinkedSortEnumCreation GetQuestionsIdsLinkedSortEnum = "creation"
	GetQuestionsIdsLinkedSortEnumVotes    GetQuestionsIdsLinkedSortEnum = "votes"
	GetQuestionsIdsLinkedSortEnumRank     GetQuestionsIdsLinkedSortEnum = "rank"
)

type GetQuestionsIdsLinkedQueryParams struct {
	Callback *string                         `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                         `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                          `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                         `queryParam:"style=form,explode=true,name=max"`
	Min      *string                         `queryParam:"style=form,explode=true,name=min"`
	Order    *GetQuestionsIdsLinkedOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                          `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                          `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                          `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetQuestionsIdsLinkedSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                          `queryParam:"style=form,explode=true,name=todate"`
}

type GetQuestionsIdsLinkedRequest struct {
	PathParams  GetQuestionsIdsLinkedPathParams
	QueryParams GetQuestionsIdsLinkedQueryParams
}

type GetQuestionsIdsLinkedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
