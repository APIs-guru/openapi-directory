package operations

import (
"time"
"openapi/pkg/models/shared")


type GetSpecificMessageAnnunciatorEnum string

const (
    GetSpecificMessageAnnunciatorEnumCommonsMain GetSpecificMessageAnnunciatorEnum = "CommonsMain"
GetSpecificMessageAnnunciatorEnumLordsMain GetSpecificMessageAnnunciatorEnum = "LordsMain"
GetSpecificMessageAnnunciatorEnumSecurity GetSpecificMessageAnnunciatorEnum = "Security"
)


type GetSpecificMessagePathParams struct {
    Annunciator GetSpecificMessageAnnunciatorEnum `pathParam:"style=simple,explode=false,name=annunciator"`
    Date time.Time `pathParam:"style=simple,explode=false,name=date"`
    
}

type GetSpecificMessageRequest struct {
    PathParams GetSpecificMessagePathParams 
    
}

type GetSpecificMessageResponse struct {
    Body []byte 
    ContentType string 
    MessageViewModel *shared.MessageViewModel 
    StatusCode int64 
    
}

