package operations



type PostCommentsIDDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostCommentsIDDeleteQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Preview *bool `queryParam:"style=form,explode=true,name=preview"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type PostCommentsIDDeleteRequest struct {
    PathParams PostCommentsIDDeletePathParams 
    QueryParams PostCommentsIDDeleteQueryParams 
    
}

type PostCommentsIDDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

