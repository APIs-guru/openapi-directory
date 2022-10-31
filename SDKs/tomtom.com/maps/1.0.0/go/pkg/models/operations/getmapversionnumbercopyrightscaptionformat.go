package operations




type GetMapVersionNumberCopyrightsCaptionFormatFormatEnum string

const (
    GetMapVersionNumberCopyrightsCaptionFormatFormatEnumJSON GetMapVersionNumberCopyrightsCaptionFormatFormatEnum = "json"
GetMapVersionNumberCopyrightsCaptionFormatFormatEnumJsonp GetMapVersionNumberCopyrightsCaptionFormatFormatEnum = "jsonp"
GetMapVersionNumberCopyrightsCaptionFormatFormatEnumXML GetMapVersionNumberCopyrightsCaptionFormatFormatEnum = "xml"
)


type GetMapVersionNumberCopyrightsCaptionFormatPathParams struct {
    Format GetMapVersionNumberCopyrightsCaptionFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    
}

type GetMapVersionNumberCopyrightsCaptionFormatQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    
}

type GetMapVersionNumberCopyrightsCaptionFormatRequest struct {
    PathParams GetMapVersionNumberCopyrightsCaptionFormatPathParams 
    QueryParams GetMapVersionNumberCopyrightsCaptionFormatQueryParams 
    
}

type GetMapVersionNumberCopyrightsCaptionFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

