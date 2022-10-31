package operations




type ConferenceHierarchyWithTeamsFormatEnum string

const (
    ConferenceHierarchyWithTeamsFormatEnumXML ConferenceHierarchyWithTeamsFormatEnum = "XML"
ConferenceHierarchyWithTeamsFormatEnumJSON ConferenceHierarchyWithTeamsFormatEnum = "JSON"
)


type ConferenceHierarchyWithTeamsPathParams struct {
    Format ConferenceHierarchyWithTeamsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type ConferenceHierarchyWithTeamsRequest struct {
    PathParams ConferenceHierarchyWithTeamsPathParams 
    
}

type ConferenceHierarchyWithTeamsResponse struct {
    Conferences []interface{} 
    ContentType string 
    StatusCode int64 
    
}

