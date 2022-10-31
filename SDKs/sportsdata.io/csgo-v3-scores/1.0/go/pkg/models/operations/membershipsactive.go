package operations




type MembershipsActiveFormatEnum string

const (
    MembershipsActiveFormatEnumXML MembershipsActiveFormatEnum = "xml"
MembershipsActiveFormatEnumJSON MembershipsActiveFormatEnum = "json"
)


type MembershipsActivePathParams struct {
    Format MembershipsActiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type MembershipsActiveRequest struct {
    PathParams MembershipsActivePathParams 
    
}

type MembershipsActiveResponse struct {
    ContentType string 
    Memberships []interface{} 
    StatusCode int64 
    
}

