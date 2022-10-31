package operations




type GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnum string

const (
    GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnumOne00 GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnum = "1.0.0"
)


type GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLPathParams struct {
    Key string `pathParam:"style=simple,explode=false,name=key"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
    WmtsVersion GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnum `pathParam:"style=simple,explode=false,name=wmtsVersion"`
    
}

type GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLRequest struct {
    PathParams GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLPathParams 
    
}

type GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse struct {
    ContentType string 
    StatusCode int64 
    
}

