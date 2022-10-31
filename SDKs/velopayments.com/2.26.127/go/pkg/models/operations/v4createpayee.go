package operations

import (
"openapi/pkg/models/shared")

type V4CreatePayeeMultipartFormData struct {
    File []shared.CreatePayeesCsvRequest2 `multipartForm:"name=file,json"`
    PayorID *string `multipartForm:"name=payorId"`
    
}

type V4CreatePayeeRequests struct {
    CreatePayeesRequest2 *shared.CreatePayeesRequest2 `request:"mediaType=application/json"`
    Object *V4CreatePayeeMultipartFormData `request:"mediaType=multipart/form-data"`
    
}

type V4CreatePayeeRequest struct {
    Request *V4CreatePayeeRequests 
    
}

type V4CreatePayeeResponse struct {
    ContentType string 
    CreatePayeesCsvResponse2 *shared.CreatePayeesCsvResponse2 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

