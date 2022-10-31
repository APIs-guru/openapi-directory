package operations




type TournamentHierarchyFormatEnum string

const (
    TournamentHierarchyFormatEnumXML TournamentHierarchyFormatEnum = "XML"
TournamentHierarchyFormatEnumJSON TournamentHierarchyFormatEnum = "JSON"
)


type TournamentHierarchyPathParams struct {
    Format TournamentHierarchyFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type TournamentHierarchyRequest struct {
    PathParams TournamentHierarchyPathParams 
    
}

type TournamentHierarchyResponse struct {
    ContentType string 
    StatusCode int64 
    Tournament *interface{} 
    
}

