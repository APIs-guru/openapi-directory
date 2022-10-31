package operations



type RemovePasswordV1RequestBodyFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type RemovePasswordV1RequestBody struct {
    File RemovePasswordV1RequestBodyFile `multipartForm:"file"`
    Password string `multipartForm:"name=password"`
    
}

type RemovePasswordV1Request struct {
    Request RemovePasswordV1RequestBody `request:"mediaType=multipart/form-data"`
    
}

type RemovePasswordV14XxApplicationProblemPlusJSON struct {
    Errors map[string]interface{} `json:"errors,omitempty"`
    Status *int64 `json:"status,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RemovePasswordV1Response struct {
    ContentType string 
    StatusCode int64 
    RemovePasswordV1200ApplicationPdfBinaryString []byte 
    RemovePasswordV14XxApplicationProblemPlusJSONObject *RemovePasswordV14XxApplicationProblemPlusJSON 
    
}

