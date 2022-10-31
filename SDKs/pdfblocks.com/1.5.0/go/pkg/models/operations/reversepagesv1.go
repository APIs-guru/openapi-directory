package operations



type ReversePagesV1RequestBodyFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type ReversePagesV1RequestBody struct {
    File ReversePagesV1RequestBodyFile `multipartForm:"file"`
    
}

type ReversePagesV1Request struct {
    Request ReversePagesV1RequestBody `request:"mediaType=multipart/form-data"`
    
}

type ReversePagesV14XxApplicationProblemPlusJSON struct {
    Errors map[string]interface{} `json:"errors,omitempty"`
    Status *int64 `json:"status,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type ReversePagesV1Response struct {
    ContentType string 
    StatusCode int64 
    ReversePagesV1200ApplicationPdfBinaryString []byte 
    ReversePagesV14XxApplicationProblemPlusJSONObject *ReversePagesV14XxApplicationProblemPlusJSON 
    
}

