package operations

type GetUsersIdsQuestionsFeaturedPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetUsersIdsQuestionsFeaturedOrderEnum string

const (
	GetUsersIdsQuestionsFeaturedOrderEnumDesc GetUsersIdsQuestionsFeaturedOrderEnum = "desc"
	GetUsersIdsQuestionsFeaturedOrderEnumAsc  GetUsersIdsQuestionsFeaturedOrderEnum = "asc"
)

type GetUsersIdsQuestionsFeaturedSortEnum string

const (
	GetUsersIdsQuestionsFeaturedSortEnumActivity GetUsersIdsQuestionsFeaturedSortEnum = "activity"
	GetUsersIdsQuestionsFeaturedSortEnumCreation GetUsersIdsQuestionsFeaturedSortEnum = "creation"
	GetUsersIdsQuestionsFeaturedSortEnumVotes    GetUsersIdsQuestionsFeaturedSortEnum = "votes"
)

type GetUsersIdsQuestionsFeaturedQueryParams struct {
	Callback *string                                `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                                `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                                 `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                                `queryParam:"style=form,explode=true,name=max"`
	Min      *string                                `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersIdsQuestionsFeaturedOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                                 `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                                 `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                                 `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersIdsQuestionsFeaturedSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                                 `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersIdsQuestionsFeaturedRequest struct {
	PathParams  GetUsersIdsQuestionsFeaturedPathParams
	QueryParams GetUsersIdsQuestionsFeaturedQueryParams
}

type GetUsersIdsQuestionsFeaturedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
