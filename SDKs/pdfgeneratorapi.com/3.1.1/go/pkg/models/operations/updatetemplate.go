package operations

import (
"openapi/pkg/models/shared")

type UpdateTemplateQueryParams struct {
    TemplateID int64 `queryParam:"style=form,explode=true,name=templateId"`
    
}

type UpdateTemplateRequest struct {
    QueryParams UpdateTemplateQueryParams 
    Request shared.TemplateDefinitionNew `request:"mediaType=application/json"`
    
}

type UpdateTemplate200ApplicationJSON struct {
    Response *shared.TemplateDefinition `json:"response,omitempty"`
    
}


type UpdateTemplate401ApplicationJSONErrorEnum string

const (
    UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed: request expired"
UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed: key missing"
UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
UpdateTemplate401ApplicationJSONErrorEnumAuthenticationFailed UpdateTemplate401ApplicationJSONErrorEnum = "Authentication failed"
)


type UpdateTemplate401ApplicationJSON struct {
    Error *UpdateTemplate401ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


type UpdateTemplate403ApplicationJSONErrorEnum string

const (
    UpdateTemplate403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit UpdateTemplate403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)


type UpdateTemplate403ApplicationJSON struct {
    Error *UpdateTemplate403ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


type UpdateTemplate404ApplicationJSONErrorEnum string

const (
    UpdateTemplate404ApplicationJSONErrorEnumEntityNotFound UpdateTemplate404ApplicationJSONErrorEnum = "Entity not found"
UpdateTemplate404ApplicationJSONErrorEnumResourceNotFound UpdateTemplate404ApplicationJSONErrorEnum = "Resource not found"
UpdateTemplate404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace UpdateTemplate404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)


type UpdateTemplate404ApplicationJSON struct {
    Error *UpdateTemplate404ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


type UpdateTemplate422ApplicationJSONErrorEnum string

const (
    UpdateTemplate422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting UpdateTemplate422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
UpdateTemplate422ApplicationJSONErrorEnumRequiredParameterMissing UpdateTemplate422ApplicationJSONErrorEnum = "Required parameter missing"
UpdateTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined UpdateTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
UpdateTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined UpdateTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)


type UpdateTemplate422ApplicationJSON struct {
    Error *UpdateTemplate422ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}

type UpdateTemplate500ApplicationJSON struct {
    Error *string `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}

type UpdateTemplateResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateTemplate200ApplicationJSONObject *UpdateTemplate200ApplicationJSON 
    UpdateTemplate401ApplicationJSONObject *UpdateTemplate401ApplicationJSON 
    UpdateTemplate403ApplicationJSONObject *UpdateTemplate403ApplicationJSON 
    UpdateTemplate404ApplicationJSONObject *UpdateTemplate404ApplicationJSON 
    UpdateTemplate422ApplicationJSONObject *UpdateTemplate422ApplicationJSON 
    UpdateTemplate500ApplicationJSONObject *UpdateTemplate500ApplicationJSON 
    
}

