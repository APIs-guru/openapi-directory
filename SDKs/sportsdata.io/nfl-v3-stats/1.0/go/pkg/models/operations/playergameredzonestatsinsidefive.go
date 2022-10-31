package operations




type PlayerGameRedZoneStatsInsideFiveFormatEnum string

const (
    PlayerGameRedZoneStatsInsideFiveFormatEnumXML PlayerGameRedZoneStatsInsideFiveFormatEnum = "XML"
PlayerGameRedZoneStatsInsideFiveFormatEnumJSON PlayerGameRedZoneStatsInsideFiveFormatEnum = "JSON"
)


type PlayerGameRedZoneStatsInsideFivePathParams struct {
    Format PlayerGameRedZoneStatsInsideFiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type PlayerGameRedZoneStatsInsideFiveRequest struct {
    PathParams PlayerGameRedZoneStatsInsideFivePathParams 
    
}

type PlayerGameRedZoneStatsInsideFiveResponse struct {
    ContentType string 
    PlayerGameRedZones []interface{} 
    StatusCode int64 
    
}

