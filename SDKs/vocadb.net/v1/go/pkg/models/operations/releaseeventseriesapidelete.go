package operations



type ReleaseEventSeriesAPIDeletePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ReleaseEventSeriesAPIDeleteQueryParams struct {
    HardDelete *bool `queryParam:"style=form,explode=true,name=hardDelete"`
    Notes *string `queryParam:"style=form,explode=true,name=notes"`
    
}

type ReleaseEventSeriesAPIDeleteRequest struct {
    PathParams ReleaseEventSeriesAPIDeletePathParams 
    QueryParams ReleaseEventSeriesAPIDeleteQueryParams 
    
}

type ReleaseEventSeriesAPIDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

