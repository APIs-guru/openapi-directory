package operations



type UploadInventoryRequestBodyFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type UploadInventoryRequestBodySignature struct {
    Content []byte `multipartForm:"content"`
    Signature string `multipartForm:"name=signature"`
    
}

type UploadInventoryRequestBody struct {
    File *UploadInventoryRequestBodyFile `multipartForm:"file"`
    Signature *UploadInventoryRequestBodySignature `multipartForm:"file"`
    
}

type UploadInventoryRequest struct {
    Request *UploadInventoryRequestBody `request:"mediaType=multipart/form-data"`
    
}


type UploadInventory200ApplicationJSONActionEnum string

const (
    UploadInventory200ApplicationJSONActionEnumUploadInventory UploadInventory200ApplicationJSONActionEnum = "uploadInventory"
)



type UploadInventory200ApplicationJSONResultEnum string

const (
    UploadInventory200ApplicationJSONResultEnumSuccess UploadInventory200ApplicationJSONResultEnum = "success"
UploadInventory200ApplicationJSONResultEnumError UploadInventory200ApplicationJSONResultEnum = "error"
)


type UploadInventory200ApplicationJSON struct {
    Action UploadInventory200ApplicationJSONActionEnum `json:"action"`
    Data string `json:"data"`
    Result UploadInventory200ApplicationJSONResultEnum `json:"result"`
    
}

type UploadInventoryResponse struct {
    ContentType string 
    StatusCode int64 
    UploadInventory200ApplicationJSONObject *UploadInventory200ApplicationJSON 
    
}

