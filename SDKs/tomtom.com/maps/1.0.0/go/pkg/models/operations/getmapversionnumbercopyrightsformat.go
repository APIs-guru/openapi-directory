package operations




type GetMapVersionNumberCopyrightsFormatFormatEnum string

const (
    GetMapVersionNumberCopyrightsFormatFormatEnumJSON GetMapVersionNumberCopyrightsFormatFormatEnum = "json"
GetMapVersionNumberCopyrightsFormatFormatEnumJsonp GetMapVersionNumberCopyrightsFormatFormatEnum = "jsonp"
GetMapVersionNumberCopyrightsFormatFormatEnumXML GetMapVersionNumberCopyrightsFormatFormatEnum = "xml"
)


type GetMapVersionNumberCopyrightsFormatPathParams struct {
    Format GetMapVersionNumberCopyrightsFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    
}

type GetMapVersionNumberCopyrightsFormatQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    
}

type GetMapVersionNumberCopyrightsFormatRequest struct {
    PathParams GetMapVersionNumberCopyrightsFormatPathParams 
    QueryParams GetMapVersionNumberCopyrightsFormatQueryParams 
    
}

type GetMapVersionNumberCopyrightsFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

