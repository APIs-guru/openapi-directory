package operations

import (
"openapi/pkg/models/shared")


type GetFacilityIdsTypeEnum string

const (
    GetFacilityIdsTypeEnumHealth GetFacilityIdsTypeEnum = "health"
GetFacilityIdsTypeEnumCemetery GetFacilityIdsTypeEnum = "cemetery"
GetFacilityIdsTypeEnumBenefits GetFacilityIdsTypeEnum = "benefits"
GetFacilityIdsTypeEnumVetCenter GetFacilityIdsTypeEnum = "vet_center"
)


type GetFacilityIdsQueryParams struct {
    Type *GetFacilityIdsTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type GetFacilityIdsSecurity struct {
    Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFacilityIdsRequest struct {
    QueryParams GetFacilityIdsQueryParams 
    Security GetFacilityIdsSecurity 
    
}

type GetFacilityIdsResponse struct {
    APIError *shared.APIError 
    ContentType string 
    FacilitiesIdsResponse *shared.FacilitiesIdsResponse 
    GenericError *shared.GenericError 
    StatusCode int64 
    
}

