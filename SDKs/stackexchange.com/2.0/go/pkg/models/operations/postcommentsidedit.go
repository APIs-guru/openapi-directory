package operations



type PostCommentsIDEditPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostCommentsIDEditQueryParams struct {
    Body *string `queryParam:"style=form,explode=true,name=body"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Preview *bool `queryParam:"style=form,explode=true,name=preview"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type PostCommentsIDEditRequest struct {
    PathParams PostCommentsIDEditPathParams 
    QueryParams PostCommentsIDEditQueryParams 
    
}

type PostCommentsIDEditResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

