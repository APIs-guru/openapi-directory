package operations

import (
"openapi/pkg/models/shared")

type UpdateLocationRequestBody struct {
    Latitude float64 `multipartForm:"name=latitude"`
    Longitude float64 `multipartForm:"name=longitude"`
    Name string `multipartForm:"name=name"`
    Radius float64 `multipartForm:"name=radius"`
    
}

type UpdateLocationRequest struct {
    Request UpdateLocationRequestBody `request:"mediaType=multipart/form-data"`
    
}

type UpdateLocationResponse struct {
    ContentType string 
    CurrentUser *shared.CurrentUser 
    StatusCode int64 
    
}

