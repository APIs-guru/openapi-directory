package operations

import (
"openapi/pkg/models/shared")


type UserAPIGetCurrentFieldsEnum string

const (
    UserAPIGetCurrentFieldsEnumNone UserAPIGetCurrentFieldsEnum = "None"
UserAPIGetCurrentFieldsEnumKnownLanguages UserAPIGetCurrentFieldsEnum = "KnownLanguages"
UserAPIGetCurrentFieldsEnumMainPicture UserAPIGetCurrentFieldsEnum = "MainPicture"
UserAPIGetCurrentFieldsEnumOldUsernames UserAPIGetCurrentFieldsEnum = "OldUsernames"
)


type UserAPIGetCurrentQueryParams struct {
    Fields *UserAPIGetCurrentFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    
}

type UserAPIGetCurrentRequest struct {
    QueryParams UserAPIGetCurrentQueryParams 
    
}

type UserAPIGetCurrentResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    UserForAPIContract *shared.UserForAPIContract 
    
}

