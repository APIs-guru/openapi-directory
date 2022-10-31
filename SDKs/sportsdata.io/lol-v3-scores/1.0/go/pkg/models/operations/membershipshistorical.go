package operations




type MembershipsHistoricalFormatEnum string

const (
    MembershipsHistoricalFormatEnumXML MembershipsHistoricalFormatEnum = "xml"
MembershipsHistoricalFormatEnumJSON MembershipsHistoricalFormatEnum = "json"
)


type MembershipsHistoricalPathParams struct {
    Format MembershipsHistoricalFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type MembershipsHistoricalRequest struct {
    PathParams MembershipsHistoricalPathParams 
    
}

type MembershipsHistoricalResponse struct {
    ContentType string 
    Memberships []interface{} 
    StatusCode int64 
    
}

