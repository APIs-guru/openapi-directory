package operations



type GetUsersIdsQuestionsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetUsersIdsQuestionsOrderEnum string

const (
    GetUsersIdsQuestionsOrderEnumDesc GetUsersIdsQuestionsOrderEnum = "desc"
GetUsersIdsQuestionsOrderEnumAsc GetUsersIdsQuestionsOrderEnum = "asc"
)



type GetUsersIdsQuestionsSortEnum string

const (
    GetUsersIdsQuestionsSortEnumActivity GetUsersIdsQuestionsSortEnum = "activity"
GetUsersIdsQuestionsSortEnumCreation GetUsersIdsQuestionsSortEnum = "creation"
GetUsersIdsQuestionsSortEnumVotes GetUsersIdsQuestionsSortEnum = "votes"
)


type GetUsersIdsQuestionsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetUsersIdsQuestionsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetUsersIdsQuestionsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetUsersIdsQuestionsRequest struct {
    PathParams GetUsersIdsQuestionsPathParams 
    QueryParams GetUsersIdsQuestionsQueryParams 
    
}

type GetUsersIdsQuestionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

