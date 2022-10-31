package operations




type DriverRaceProjectionsEntryListFormatEnum string

const (
    DriverRaceProjectionsEntryListFormatEnumXML DriverRaceProjectionsEntryListFormatEnum = "xml"
DriverRaceProjectionsEntryListFormatEnumJSON DriverRaceProjectionsEntryListFormatEnum = "json"
)


type DriverRaceProjectionsEntryListPathParams struct {
    Format DriverRaceProjectionsEntryListFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Raceid string `pathParam:"style=simple,explode=false,name=raceid"`
    
}

type DriverRaceProjectionsEntryListRequest struct {
    PathParams DriverRaceProjectionsEntryListPathParams 
    
}

type DriverRaceProjectionsEntryListResponse struct {
    ContentType string 
    DriverRaceProjections []interface{} 
    StatusCode int64 
    
}

