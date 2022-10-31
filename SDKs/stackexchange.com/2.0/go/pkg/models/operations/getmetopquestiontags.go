package operations



type GetMeTopQuestionTagsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type GetMeTopQuestionTagsRequest struct {
    QueryParams GetMeTopQuestionTagsQueryParams 
    
}

type GetMeTopQuestionTagsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

