package operations



type GetQuestionsIdsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetQuestionsIdsOrderEnum string

const (
    GetQuestionsIdsOrderEnumDesc GetQuestionsIdsOrderEnum = "desc"
GetQuestionsIdsOrderEnumAsc GetQuestionsIdsOrderEnum = "asc"
)



type GetQuestionsIdsSortEnum string

const (
    GetQuestionsIdsSortEnumActivity GetQuestionsIdsSortEnum = "activity"
GetQuestionsIdsSortEnumCreation GetQuestionsIdsSortEnum = "creation"
GetQuestionsIdsSortEnumVotes GetQuestionsIdsSortEnum = "votes"
)


type GetQuestionsIdsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetQuestionsIdsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetQuestionsIdsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetQuestionsIdsRequest struct {
    PathParams GetQuestionsIdsPathParams 
    QueryParams GetQuestionsIdsQueryParams 
    
}

type GetQuestionsIdsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

