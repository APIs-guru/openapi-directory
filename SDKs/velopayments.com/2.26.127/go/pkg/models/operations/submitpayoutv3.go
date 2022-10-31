package operations

import (
"openapi/pkg/models/shared")

type SubmitPayoutV3MultipartFormData struct {
    File []shared.PaymentInstructionV3 `multipartForm:"name=file,json"`
    PayorID *string `multipartForm:"name=payorId"`
    PayoutFromPayorID *string `multipartForm:"name=payoutFromPayorId"`
    PayoutToPayorID *string `multipartForm:"name=payoutToPayorId"`
    
}

type SubmitPayoutV3Requests struct {
    CreatePayoutRequestV3 *shared.CreatePayoutRequestV3 `request:"mediaType=application/json"`
    Object *SubmitPayoutV3MultipartFormData `request:"mediaType=multipart/form-data"`
    
}

type SubmitPayoutV3Request struct {
    Request SubmitPayoutV3Requests 
    
}

type SubmitPayoutV3Response struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    
}

