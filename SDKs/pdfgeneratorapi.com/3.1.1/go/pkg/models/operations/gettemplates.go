package operations

import (
"openapi/pkg/models/shared")

type GetTemplates200ApplicationJSON struct {
    Response []shared.Template `json:"response,omitempty"`
    
}


type GetTemplates401ApplicationJSONErrorEnum string

const (
    GetTemplates401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired GetTemplates401ApplicationJSONErrorEnum = "Authentication failed: request expired"
GetTemplates401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing GetTemplates401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
GetTemplates401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing GetTemplates401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
GetTemplates401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing GetTemplates401ApplicationJSONErrorEnum = "Authentication failed: key missing"
GetTemplates401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt GetTemplates401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
GetTemplates401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt GetTemplates401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
GetTemplates401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt GetTemplates401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
GetTemplates401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer GetTemplates401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
GetTemplates401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature GetTemplates401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
GetTemplates401ApplicationJSONErrorEnumAuthenticationFailed GetTemplates401ApplicationJSONErrorEnum = "Authentication failed"
)


type GetTemplates401ApplicationJSON struct {
    Error *GetTemplates401ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


type GetTemplates403ApplicationJSONErrorEnum string

const (
    GetTemplates403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit GetTemplates403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)


type GetTemplates403ApplicationJSON struct {
    Error *GetTemplates403ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


type GetTemplates404ApplicationJSONErrorEnum string

const (
    GetTemplates404ApplicationJSONErrorEnumEntityNotFound GetTemplates404ApplicationJSONErrorEnum = "Entity not found"
GetTemplates404ApplicationJSONErrorEnumResourceNotFound GetTemplates404ApplicationJSONErrorEnum = "Resource not found"
GetTemplates404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace GetTemplates404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)


type GetTemplates404ApplicationJSON struct {
    Error *GetTemplates404ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


type GetTemplates422ApplicationJSONErrorEnum string

const (
    GetTemplates422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting GetTemplates422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
GetTemplates422ApplicationJSONErrorEnumRequiredParameterMissing GetTemplates422ApplicationJSONErrorEnum = "Required parameter missing"
GetTemplates422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined GetTemplates422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
GetTemplates422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined GetTemplates422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)


type GetTemplates422ApplicationJSON struct {
    Error *GetTemplates422ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}

type GetTemplates500ApplicationJSON struct {
    Error *string `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}

type GetTemplatesResponse struct {
    ContentType string 
    StatusCode int64 
    GetTemplates200ApplicationJSONObject *GetTemplates200ApplicationJSON 
    GetTemplates401ApplicationJSONObject *GetTemplates401ApplicationJSON 
    GetTemplates403ApplicationJSONObject *GetTemplates403ApplicationJSON 
    GetTemplates404ApplicationJSONObject *GetTemplates404ApplicationJSON 
    GetTemplates422ApplicationJSONObject *GetTemplates422ApplicationJSON 
    GetTemplates500ApplicationJSONObject *GetTemplates500ApplicationJSON 
    
}

