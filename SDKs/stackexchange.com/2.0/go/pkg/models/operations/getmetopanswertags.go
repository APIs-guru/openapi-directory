package operations



type GetMeTopAnswerTagsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type GetMeTopAnswerTagsRequest struct {
    QueryParams GetMeTopAnswerTagsQueryParams 
    
}

type GetMeTopAnswerTagsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

