package operations



type UnpackRequest struct {
    Request interface{} `request:"mediaType=multipart/form-data"`
    
}

type UnpackResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Unpack200WildcardBinaryString []byte 
    
}

