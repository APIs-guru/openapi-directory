package operations



type RotatePagesV1RequestBodyFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type RotatePagesV1RequestBody struct {
    Angle int32 `multipartForm:"name=angle"`
    File RotatePagesV1RequestBodyFile `multipartForm:"file"`
    FirstPage *int32 `multipartForm:"name=first_page"`
    LastPage *int32 `multipartForm:"name=last_page"`
    
}

type RotatePagesV1Request struct {
    Request RotatePagesV1RequestBody `request:"mediaType=multipart/form-data"`
    
}

type RotatePagesV14XxApplicationProblemPlusJSON struct {
    Errors map[string]interface{} `json:"errors,omitempty"`
    Status *int64 `json:"status,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RotatePagesV1Response struct {
    ContentType string 
    StatusCode int64 
    RotatePagesV1200ApplicationPdfBinaryString []byte 
    RotatePagesV14XxApplicationProblemPlusJSONObject *RotatePagesV14XxApplicationProblemPlusJSON 
    
}

