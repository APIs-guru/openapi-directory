package operations




type EntryAPIGetNamesNameMatchModeEnum string

const (
    EntryAPIGetNamesNameMatchModeEnumAuto EntryAPIGetNamesNameMatchModeEnum = "Auto"
EntryAPIGetNamesNameMatchModeEnumPartial EntryAPIGetNamesNameMatchModeEnum = "Partial"
EntryAPIGetNamesNameMatchModeEnumStartsWith EntryAPIGetNamesNameMatchModeEnum = "StartsWith"
EntryAPIGetNamesNameMatchModeEnumExact EntryAPIGetNamesNameMatchModeEnum = "Exact"
EntryAPIGetNamesNameMatchModeEnumWords EntryAPIGetNamesNameMatchModeEnum = "Words"
)


type EntryAPIGetNamesQueryParams struct {
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    NameMatchMode *EntryAPIGetNamesNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    
}

type EntryAPIGetNamesRequest struct {
    QueryParams EntryAPIGetNamesQueryParams 
    
}

type EntryAPIGetNamesResponse struct {
    Body []byte 
    ContentType string 
    EntryAPIGetNames200ApplicationJSONStrings []string 
    EntryAPIGetNames200ApplicationJsonpStrings []string 
    EntryAPIGetNames200TextJSONStrings []string 
    StatusCode int64 
    
}

