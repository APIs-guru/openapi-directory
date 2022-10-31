package operations




type MembershipsRecentlyChangedFormatEnum string

const (
    MembershipsRecentlyChangedFormatEnumXML MembershipsRecentlyChangedFormatEnum = "xml"
MembershipsRecentlyChangedFormatEnumJSON MembershipsRecentlyChangedFormatEnum = "json"
)


type MembershipsRecentlyChangedPathParams struct {
    Days string `pathParam:"style=simple,explode=false,name=days"`
    Format MembershipsRecentlyChangedFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type MembershipsRecentlyChangedRequest struct {
    PathParams MembershipsRecentlyChangedPathParams 
    
}

type MembershipsRecentlyChangedResponse struct {
    ContentType string 
    Memberships []interface{} 
    StatusCode int64 
    
}

