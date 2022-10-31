package operations



type GetEtymologiesPathParams struct {
    Word string `pathParam:"style=simple,explode=false,name=word"`
    
}


type GetEtymologiesUseCanonicalEnum string

const (
    GetEtymologiesUseCanonicalEnumFalse GetEtymologiesUseCanonicalEnum = "false"
GetEtymologiesUseCanonicalEnumTrue GetEtymologiesUseCanonicalEnum = "true"
)


type GetEtymologiesQueryParams struct {
    UseCanonical *GetEtymologiesUseCanonicalEnum `queryParam:"style=form,explode=true,name=useCanonical"`
    
}

type GetEtymologiesRequest struct {
    PathParams GetEtymologiesPathParams 
    QueryParams GetEtymologiesQueryParams 
    
}

type GetEtymologiesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

