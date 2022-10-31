package operations




type LeagueHierarchyFormatEnum string

const (
    LeagueHierarchyFormatEnumXML LeagueHierarchyFormatEnum = "XML"
LeagueHierarchyFormatEnumJSON LeagueHierarchyFormatEnum = "JSON"
)


type LeagueHierarchyPathParams struct {
    Format LeagueHierarchyFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type LeagueHierarchyRequest struct {
    PathParams LeagueHierarchyPathParams 
    
}

type LeagueHierarchyResponse struct {
    Conferences []interface{} 
    ContentType string 
    StatusCode int64 
    
}

