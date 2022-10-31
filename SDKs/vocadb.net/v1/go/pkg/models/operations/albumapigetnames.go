package operations




type AlbumAPIGetNamesNameMatchModeEnum string

const (
    AlbumAPIGetNamesNameMatchModeEnumAuto AlbumAPIGetNamesNameMatchModeEnum = "Auto"
AlbumAPIGetNamesNameMatchModeEnumPartial AlbumAPIGetNamesNameMatchModeEnum = "Partial"
AlbumAPIGetNamesNameMatchModeEnumStartsWith AlbumAPIGetNamesNameMatchModeEnum = "StartsWith"
AlbumAPIGetNamesNameMatchModeEnumExact AlbumAPIGetNamesNameMatchModeEnum = "Exact"
AlbumAPIGetNamesNameMatchModeEnumWords AlbumAPIGetNamesNameMatchModeEnum = "Words"
)


type AlbumAPIGetNamesQueryParams struct {
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *AlbumAPIGetNamesNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    
}

type AlbumAPIGetNamesRequest struct {
    QueryParams AlbumAPIGetNamesQueryParams 
    
}

type AlbumAPIGetNamesResponse struct {
    AlbumAPIGetNames200ApplicationJSONStrings []string 
    AlbumAPIGetNames200ApplicationJsonpStrings []string 
    AlbumAPIGetNames200TextJSONStrings []string 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

