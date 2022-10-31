package operations



type DeleteUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type DeleteUserRequest struct {
    PathParams DeleteUserPathParams 
    
}


type DeleteUser200ApplicationJSONActionEnum string

const (
    DeleteUser200ApplicationJSONActionEnumDeleteUser DeleteUser200ApplicationJSONActionEnum = "deleteUser"
)


type DeleteUser200ApplicationJSONDataDeletedUser struct {
    Username string `json:"username"`
    
}

type DeleteUser200ApplicationJSONData struct {
    DeletedUser DeleteUser200ApplicationJSONDataDeletedUser `json:"deletedUser"`
    
}


type DeleteUser200ApplicationJSONResultEnum string

const (
    DeleteUser200ApplicationJSONResultEnumSuccess DeleteUser200ApplicationJSONResultEnum = "success"
DeleteUser200ApplicationJSONResultEnumError DeleteUser200ApplicationJSONResultEnum = "error"
)


type DeleteUser200ApplicationJSON struct {
    Action DeleteUser200ApplicationJSONActionEnum `json:"action"`
    Data DeleteUser200ApplicationJSONData `json:"data"`
    Result DeleteUser200ApplicationJSONResultEnum `json:"result"`
    
}

type DeleteUserResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteUser200ApplicationJSONObject *DeleteUser200ApplicationJSON 
    
}

