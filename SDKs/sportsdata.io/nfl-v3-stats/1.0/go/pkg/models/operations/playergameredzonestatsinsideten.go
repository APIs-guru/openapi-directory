package operations




type PlayerGameRedZoneStatsInsideTenFormatEnum string

const (
    PlayerGameRedZoneStatsInsideTenFormatEnumXML PlayerGameRedZoneStatsInsideTenFormatEnum = "XML"
PlayerGameRedZoneStatsInsideTenFormatEnumJSON PlayerGameRedZoneStatsInsideTenFormatEnum = "JSON"
)


type PlayerGameRedZoneStatsInsideTenPathParams struct {
    Format PlayerGameRedZoneStatsInsideTenFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type PlayerGameRedZoneStatsInsideTenRequest struct {
    PathParams PlayerGameRedZoneStatsInsideTenPathParams 
    
}

type PlayerGameRedZoneStatsInsideTenResponse struct {
    ContentType string 
    PlayerGameRedZones []interface{} 
    StatusCode int64 
    
}

