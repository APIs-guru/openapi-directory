package operations



type GetExamplesPathParams struct {
    Word string `pathParam:"style=simple,explode=false,name=word"`
    
}


type GetExamplesIncludeDuplicatesEnum string

const (
    GetExamplesIncludeDuplicatesEnumFalse GetExamplesIncludeDuplicatesEnum = "false"
GetExamplesIncludeDuplicatesEnumTrue GetExamplesIncludeDuplicatesEnum = "true"
)



type GetExamplesUseCanonicalEnum string

const (
    GetExamplesUseCanonicalEnumFalse GetExamplesUseCanonicalEnum = "false"
GetExamplesUseCanonicalEnumTrue GetExamplesUseCanonicalEnum = "true"
)


type GetExamplesQueryParams struct {
    IncludeDuplicates *GetExamplesIncludeDuplicatesEnum `queryParam:"style=form,explode=true,name=includeDuplicates"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
    UseCanonical *GetExamplesUseCanonicalEnum `queryParam:"style=form,explode=true,name=useCanonical"`
    
}

type GetExamplesRequest struct {
    PathParams GetExamplesPathParams 
    QueryParams GetExamplesQueryParams 
    
}

type GetExamplesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

