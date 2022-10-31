package operations




type ReadCvEfromFs200ApplicationJSONActionEnum string

const (
    ReadCvEfromFs200ApplicationJSONActionEnumReadCvEfromFs ReadCvEfromFs200ApplicationJSONActionEnum = "readCVEfromFS"
)


type ReadCvEfromFs200ApplicationJSONData struct {
    CvEs int64 `json:"CVEs"`
    
}


type ReadCvEfromFs200ApplicationJSONResultEnum string

const (
    ReadCvEfromFs200ApplicationJSONResultEnumSuccess ReadCvEfromFs200ApplicationJSONResultEnum = "success"
ReadCvEfromFs200ApplicationJSONResultEnumError ReadCvEfromFs200ApplicationJSONResultEnum = "error"
)


type ReadCvEfromFs200ApplicationJSON struct {
    Action ReadCvEfromFs200ApplicationJSONActionEnum `json:"action"`
    Data ReadCvEfromFs200ApplicationJSONData `json:"data"`
    Result ReadCvEfromFs200ApplicationJSONResultEnum `json:"result"`
    
}

type ReadCvEfromFsResponse struct {
    ContentType string 
    StatusCode int64 
    ReadCvEfromFs200ApplicationJSONObject *ReadCvEfromFs200ApplicationJSON 
    
}

