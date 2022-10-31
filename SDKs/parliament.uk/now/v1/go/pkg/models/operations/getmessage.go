package operations

import (
"openapi/pkg/models/shared")


type GetMessageAnnunciatorEnum string

const (
    GetMessageAnnunciatorEnumCommonsMain GetMessageAnnunciatorEnum = "CommonsMain"
GetMessageAnnunciatorEnumLordsMain GetMessageAnnunciatorEnum = "LordsMain"
GetMessageAnnunciatorEnumSecurity GetMessageAnnunciatorEnum = "Security"
)


type GetMessagePathParams struct {
    Annunciator GetMessageAnnunciatorEnum `pathParam:"style=simple,explode=false,name=annunciator"`
    
}

type GetMessageRequest struct {
    PathParams GetMessagePathParams 
    
}

type GetMessageResponse struct {
    Body []byte 
    ContentType string 
    MessageViewModel *shared.MessageViewModel 
    StatusCode int64 
    
}

