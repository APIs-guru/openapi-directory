package operations



type GetUsersIdsQuestionsUnacceptedPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetUsersIdsQuestionsUnacceptedOrderEnum string

const (
    GetUsersIdsQuestionsUnacceptedOrderEnumDesc GetUsersIdsQuestionsUnacceptedOrderEnum = "desc"
GetUsersIdsQuestionsUnacceptedOrderEnumAsc GetUsersIdsQuestionsUnacceptedOrderEnum = "asc"
)



type GetUsersIdsQuestionsUnacceptedSortEnum string

const (
    GetUsersIdsQuestionsUnacceptedSortEnumActivity GetUsersIdsQuestionsUnacceptedSortEnum = "activity"
GetUsersIdsQuestionsUnacceptedSortEnumCreation GetUsersIdsQuestionsUnacceptedSortEnum = "creation"
GetUsersIdsQuestionsUnacceptedSortEnumVotes GetUsersIdsQuestionsUnacceptedSortEnum = "votes"
)


type GetUsersIdsQuestionsUnacceptedQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetUsersIdsQuestionsUnacceptedOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetUsersIdsQuestionsUnacceptedSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetUsersIdsQuestionsUnacceptedRequest struct {
    PathParams GetUsersIdsQuestionsUnacceptedPathParams 
    QueryParams GetUsersIdsQuestionsUnacceptedQueryParams 
    
}

type GetUsersIdsQuestionsUnacceptedResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

