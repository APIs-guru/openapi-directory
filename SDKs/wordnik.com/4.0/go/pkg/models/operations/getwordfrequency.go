package operations



type GetWordFrequencyPathParams struct {
    Word string `pathParam:"style=simple,explode=false,name=word"`
    
}


type GetWordFrequencyUseCanonicalEnum string

const (
    GetWordFrequencyUseCanonicalEnumFalse GetWordFrequencyUseCanonicalEnum = "false"
GetWordFrequencyUseCanonicalEnumTrue GetWordFrequencyUseCanonicalEnum = "true"
)


type GetWordFrequencyQueryParams struct {
    EndYear *int32 `queryParam:"style=form,explode=true,name=endYear"`
    StartYear *int32 `queryParam:"style=form,explode=true,name=startYear"`
    UseCanonical *GetWordFrequencyUseCanonicalEnum `queryParam:"style=form,explode=true,name=useCanonical"`
    
}

type GetWordFrequencyRequest struct {
    PathParams GetWordFrequencyPathParams 
    QueryParams GetWordFrequencyQueryParams 
    
}

type GetWordFrequencyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

