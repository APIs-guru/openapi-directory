package operations

type GetMeTagsTagsTopQuestionsPathParams struct {
	Tags string `pathParam:"style=simple,explode=false,name=tags"`
}

type GetMeTagsTagsTopQuestionsOrderEnum string

const (
	GetMeTagsTagsTopQuestionsOrderEnumDesc GetMeTagsTagsTopQuestionsOrderEnum = "desc"
	GetMeTagsTagsTopQuestionsOrderEnumAsc  GetMeTagsTagsTopQuestionsOrderEnum = "asc"
)

type GetMeTagsTagsTopQuestionsSortEnum string

const (
	GetMeTagsTagsTopQuestionsSortEnumActivity  GetMeTagsTagsTopQuestionsSortEnum = "activity"
	GetMeTagsTagsTopQuestionsSortEnumCreation  GetMeTagsTagsTopQuestionsSortEnum = "creation"
	GetMeTagsTagsTopQuestionsSortEnumVotes     GetMeTagsTagsTopQuestionsSortEnum = "votes"
	GetMeTagsTagsTopQuestionsSortEnumHot       GetMeTagsTagsTopQuestionsSortEnum = "hot"
	GetMeTagsTagsTopQuestionsSortEnumWeek      GetMeTagsTagsTopQuestionsSortEnum = "week"
	GetMeTagsTagsTopQuestionsSortEnumMonth     GetMeTagsTagsTopQuestionsSortEnum = "month"
	GetMeTagsTagsTopQuestionsSortEnumRelevance GetMeTagsTagsTopQuestionsSortEnum = "relevance"
)

type GetMeTagsTagsTopQuestionsQueryParams struct {
	Callback *string                             `queryParam:"style=form,explode=true,name=callback"`
	Filter   *string                             `queryParam:"style=form,explode=true,name=filter"`
	Fromdate *int64                              `queryParam:"style=form,explode=true,name=fromdate"`
	Max      *string                             `queryParam:"style=form,explode=true,name=max"`
	Min      *string                             `queryParam:"style=form,explode=true,name=min"`
	Order    *GetMeTagsTagsTopQuestionsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Page     *int64                              `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                              `queryParam:"style=form,explode=true,name=pagesize"`
	Site     string                              `queryParam:"style=form,explode=true,name=site"`
	Sort     *GetMeTagsTagsTopQuestionsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	Todate   *int64                              `queryParam:"style=form,explode=true,name=todate"`
}

type GetMeTagsTagsTopQuestionsRequest struct {
	PathParams  GetMeTagsTagsTopQuestionsPathParams
	QueryParams GetMeTagsTagsTopQuestionsQueryParams
}

type GetMeTagsTagsTopQuestionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
