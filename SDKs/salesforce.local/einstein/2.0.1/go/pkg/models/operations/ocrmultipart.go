package operations

import (
"openapi/pkg/models/shared")

type OcrMultipartRequestBodySampleContent struct {
    Content []byte `multipartForm:"content"`
    SampleContent string `multipartForm:"name=sampleContent"`
    
}

type OcrMultipartRequestBody struct {
    ModelID *string `multipartForm:"name=modelId"`
    SampleContent *OcrMultipartRequestBodySampleContent `multipartForm:"file"`
    SampleID *string `multipartForm:"name=sampleId"`
    SampleLocation *string `multipartForm:"name=sampleLocation"`
    Task *string `multipartForm:"name=task"`
    
}

type OcrMultipartSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type OcrMultipartRequest struct {
    Request *OcrMultipartRequestBody `request:"mediaType=multipart/form-data"`
    Security OcrMultipartSecurity 
    
}

type OcrMultipartResponse struct {
    ContentType string 
    OcrPredictResponse *shared.OcrPredictResponse 
    StatusCode int64 
    
}

