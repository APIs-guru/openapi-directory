package operations



type GetUsersIdsQuestionsUnansweredPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetUsersIdsQuestionsUnansweredOrderEnum string

const (
    GetUsersIdsQuestionsUnansweredOrderEnumDesc GetUsersIdsQuestionsUnansweredOrderEnum = "desc"
GetUsersIdsQuestionsUnansweredOrderEnumAsc GetUsersIdsQuestionsUnansweredOrderEnum = "asc"
)



type GetUsersIdsQuestionsUnansweredSortEnum string

const (
    GetUsersIdsQuestionsUnansweredSortEnumActivity GetUsersIdsQuestionsUnansweredSortEnum = "activity"
GetUsersIdsQuestionsUnansweredSortEnumCreation GetUsersIdsQuestionsUnansweredSortEnum = "creation"
GetUsersIdsQuestionsUnansweredSortEnumVotes GetUsersIdsQuestionsUnansweredSortEnum = "votes"
)


type GetUsersIdsQuestionsUnansweredQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetUsersIdsQuestionsUnansweredOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetUsersIdsQuestionsUnansweredSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetUsersIdsQuestionsUnansweredRequest struct {
    PathParams GetUsersIdsQuestionsUnansweredPathParams 
    QueryParams GetUsersIdsQuestionsUnansweredQueryParams 
    
}

type GetUsersIdsQuestionsUnansweredResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

