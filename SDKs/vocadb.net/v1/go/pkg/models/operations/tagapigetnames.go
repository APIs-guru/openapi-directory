package operations



type TagAPIGetNamesQueryParams struct {
    AllowAliases *bool `queryParam:"style=form,explode=true,name=allowAliases"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    
}

type TagAPIGetNamesRequest struct {
    QueryParams TagAPIGetNamesQueryParams 
    
}

type TagAPIGetNamesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TagAPIGetNames200ApplicationJSONStrings []string 
    TagAPIGetNames200ApplicationJsonpStrings []string 
    TagAPIGetNames200TextJSONStrings []string 
    
}

