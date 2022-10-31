package operations

type GetUsersIdsQuestionsNoAnswersPathParams struct {
	Ids string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetUsersIdsQuestionsNoAnswersOrderEnum string

const (
	GetUsersIdsQuestionsNoAnswersOrderEnumDesc GetUsersIdsQuestionsNoAnswersOrderEnum = "desc"
	GetUsersIdsQuestionsNoAnswersOrderEnumAsc  GetUsersIdsQuestionsNoAnswersOrderEnum = "asc"
)

type GetUsersIdsQuestionsNoAnswersSortEnum string

const (
	GetUsersIdsQuestionsNoAnswersSortEnumActivity GetUsersIdsQuestionsNoAnswersSortEnum = "activity"
	GetUsersIdsQuestionsNoAnswersSortEnumCreation GetUsersIdsQuestionsNoAnswersSortEnum = "creation"
	GetUsersIdsQuestionsNoAnswersSortEnumVotes    GetUsersIdsQuestionsNoAnswersSortEnum = "votes"
)

type GetUsersIdsQuestionsNoAnswersQueryParams struct {
	Callback *string                                 `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                                 `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                                  `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                                 `queryParam:"style=form,explode=true,name=max"`
	Min      *string                                 `queryParam:"style=form,explode=true,name=min"`
	Order    *GetUsersIdsQuestionsNoAnswersOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                                  `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                                  `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                                  `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetUsersIdsQuestionsNoAnswersSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                                  `queryParam:"style=form,explode=true,name=todate"`
}

type GetUsersIdsQuestionsNoAnswersRequest struct {
	PathParams  GetUsersIdsQuestionsNoAnswersPathParams
	QueryParams GetUsersIdsQuestionsNoAnswersQueryParams
}

type GetUsersIdsQuestionsNoAnswersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
