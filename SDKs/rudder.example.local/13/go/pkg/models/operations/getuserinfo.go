package operations

import (
"openapi/pkg/models/shared")


type GetUserInfo200ApplicationJSONActionEnum string

const (
    GetUserInfo200ApplicationJSONActionEnumGetUserInfo GetUserInfo200ApplicationJSONActionEnum = "getUserInfo"
)



type GetUserInfo200ApplicationJSONDataDigestEnum string

const (
    GetUserInfo200ApplicationJSONDataDigestEnumBcrypt GetUserInfo200ApplicationJSONDataDigestEnum = "BCRYPT"
GetUserInfo200ApplicationJSONDataDigestEnumSha512 GetUserInfo200ApplicationJSONDataDigestEnum = "SHA512"
GetUserInfo200ApplicationJSONDataDigestEnumSha256 GetUserInfo200ApplicationJSONDataDigestEnum = "SHA256"
GetUserInfo200ApplicationJSONDataDigestEnumSha1 GetUserInfo200ApplicationJSONDataDigestEnum = "SHA1"
GetUserInfo200ApplicationJSONDataDigestEnumMd5 GetUserInfo200ApplicationJSONDataDigestEnum = "MD5"
)


type GetUserInfo200ApplicationJSONData struct {
    Digest GetUserInfo200ApplicationJSONDataDigestEnum `json:"digest"`
    Users []shared.Users `json:"users"`
    
}


type GetUserInfo200ApplicationJSONResultEnum string

const (
    GetUserInfo200ApplicationJSONResultEnumSuccess GetUserInfo200ApplicationJSONResultEnum = "success"
GetUserInfo200ApplicationJSONResultEnumError GetUserInfo200ApplicationJSONResultEnum = "error"
)


type GetUserInfo200ApplicationJSON struct {
    Action GetUserInfo200ApplicationJSONActionEnum `json:"action"`
    Data GetUserInfo200ApplicationJSONData `json:"data"`
    Result GetUserInfo200ApplicationJSONResultEnum `json:"result"`
    
}

type GetUserInfoResponse struct {
    ContentType string 
    StatusCode int64 
    GetUserInfo200ApplicationJSONObject *GetUserInfo200ApplicationJSON 
    
}

