package operations



type GetObservationsByCodesPathParams struct {
    UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetObservationsByCodesQueryParams struct {
    Code []string `queryParam:"style=form,explode=true,name=code"`
    Limit int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset int64 `queryParam:"style=form,explode=true,name=offset"`
    OrderDirection string `queryParam:"style=form,explode=true,name=orderDirection"`
    
}

type GetObservationsByCodesRequest struct {
    PathParams GetObservationsByCodesPathParams 
    QueryParams GetObservationsByCodesQueryParams 
    
}

type GetObservationsByCodesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

