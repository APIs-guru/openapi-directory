package operations

import (
"openapi/pkg/models/shared")

type UserAPIGetOnePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type UserAPIGetOneFieldsEnum string

const (
    UserAPIGetOneFieldsEnumNone UserAPIGetOneFieldsEnum = "None"
UserAPIGetOneFieldsEnumKnownLanguages UserAPIGetOneFieldsEnum = "KnownLanguages"
UserAPIGetOneFieldsEnumMainPicture UserAPIGetOneFieldsEnum = "MainPicture"
UserAPIGetOneFieldsEnumOldUsernames UserAPIGetOneFieldsEnum = "OldUsernames"
)


type UserAPIGetOneQueryParams struct {
    Fields *UserAPIGetOneFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    
}

type UserAPIGetOneRequest struct {
    PathParams UserAPIGetOnePathParams 
    QueryParams UserAPIGetOneQueryParams 
    
}

type UserAPIGetOneResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    UserForAPIContract *shared.UserForAPIContract 
    
}

