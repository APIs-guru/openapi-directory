package operations




type GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum string

const (
    GetMapVersionNumberCopyrightsZoomXYFormatFormatEnumJSON GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum = "json"
GetMapVersionNumberCopyrightsZoomXYFormatFormatEnumJsonp GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum = "jsonp"
GetMapVersionNumberCopyrightsZoomXYFormatFormatEnumXML GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum = "xml"
)


type GetMapVersionNumberCopyrightsZoomXYFormatPathParams struct {
    X int64 `pathParam:"style=simple,explode=false,name=X"`
    Y int64 `pathParam:"style=simple,explode=false,name=Y"`
    Format GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    Zoom int64 `pathParam:"style=simple,explode=false,name=zoom"`
    
}

type GetMapVersionNumberCopyrightsZoomXYFormatQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    
}

type GetMapVersionNumberCopyrightsZoomXYFormatRequest struct {
    PathParams GetMapVersionNumberCopyrightsZoomXYFormatPathParams 
    QueryParams GetMapVersionNumberCopyrightsZoomXYFormatQueryParams 
    
}

type GetMapVersionNumberCopyrightsZoomXYFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

