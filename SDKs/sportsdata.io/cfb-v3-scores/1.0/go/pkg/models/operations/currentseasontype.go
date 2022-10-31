package operations




type CurrentSeasontypeFormatEnum string

const (
    CurrentSeasontypeFormatEnumXML CurrentSeasontypeFormatEnum = "XML"
CurrentSeasontypeFormatEnumJSON CurrentSeasontypeFormatEnum = "JSON"
)


type CurrentSeasontypePathParams struct {
    Format CurrentSeasontypeFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type CurrentSeasontypeRequest struct {
    PathParams CurrentSeasontypePathParams 
    
}

type CurrentSeasontypeResponse struct {
    ContentType string 
    CurrentSeasontype200ApplicationJSONString *string 
    StatusCode int64 
    
}

