package operations



type GetQuestionsIdsAnswersPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetQuestionsIdsAnswersOrderEnum string

const (
    GetQuestionsIdsAnswersOrderEnumDesc GetQuestionsIdsAnswersOrderEnum = "desc"
GetQuestionsIdsAnswersOrderEnumAsc GetQuestionsIdsAnswersOrderEnum = "asc"
)



type GetQuestionsIdsAnswersSortEnum string

const (
    GetQuestionsIdsAnswersSortEnumActivity GetQuestionsIdsAnswersSortEnum = "activity"
GetQuestionsIdsAnswersSortEnumCreation GetQuestionsIdsAnswersSortEnum = "creation"
GetQuestionsIdsAnswersSortEnumVotes GetQuestionsIdsAnswersSortEnum = "votes"
)


type GetQuestionsIdsAnswersQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetQuestionsIdsAnswersOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetQuestionsIdsAnswersSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetQuestionsIdsAnswersRequest struct {
    PathParams GetQuestionsIdsAnswersPathParams 
    QueryParams GetQuestionsIdsAnswersQueryParams 
    
}

type GetQuestionsIdsAnswersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

