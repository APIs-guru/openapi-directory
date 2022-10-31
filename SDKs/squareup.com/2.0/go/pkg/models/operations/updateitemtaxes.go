package operations

import (
"openapi/pkg/models/shared")

type UpdateItemTaxesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdateItemTaxesRequest struct {
    Request shared.UpdateItemTaxesRequest `request:"mediaType=application/json"`
    Security UpdateItemTaxesSecurity 
    
}

type UpdateItemTaxesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateItemTaxesResponse *shared.UpdateItemTaxesResponse 
    
}

