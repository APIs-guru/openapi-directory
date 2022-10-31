package operations



type GetQuestionsIdsRelatedPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetQuestionsIdsRelatedOrderEnum string

const (
    GetQuestionsIdsRelatedOrderEnumDesc GetQuestionsIdsRelatedOrderEnum = "desc"
GetQuestionsIdsRelatedOrderEnumAsc GetQuestionsIdsRelatedOrderEnum = "asc"
)



type GetQuestionsIdsRelatedSortEnum string

const (
    GetQuestionsIdsRelatedSortEnumActivity GetQuestionsIdsRelatedSortEnum = "activity"
GetQuestionsIdsRelatedSortEnumCreation GetQuestionsIdsRelatedSortEnum = "creation"
GetQuestionsIdsRelatedSortEnumVotes GetQuestionsIdsRelatedSortEnum = "votes"
GetQuestionsIdsRelatedSortEnumRank GetQuestionsIdsRelatedSortEnum = "rank"
)


type GetQuestionsIdsRelatedQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetQuestionsIdsRelatedOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetQuestionsIdsRelatedSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetQuestionsIdsRelatedRequest struct {
    PathParams GetQuestionsIdsRelatedPathParams 
    QueryParams GetQuestionsIdsRelatedQueryParams 
    
}

type GetQuestionsIdsRelatedResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

