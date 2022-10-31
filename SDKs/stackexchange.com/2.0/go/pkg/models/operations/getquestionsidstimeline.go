package operations



type GetQuestionsIdsTimelinePathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}

type GetQuestionsIdsTimelineQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetQuestionsIdsTimelineRequest struct {
    PathParams GetQuestionsIdsTimelinePathParams 
    QueryParams GetQuestionsIdsTimelineQueryParams 
    
}

type GetQuestionsIdsTimelineResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

