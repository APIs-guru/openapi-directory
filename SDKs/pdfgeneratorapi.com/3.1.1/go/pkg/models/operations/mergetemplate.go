package operations

import (
"openapi/pkg/models/shared")

type MergeTemplateQueryParams struct {
    Format *shared.FormatEnum `queryParam:"style=form,explode=true,name=format"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Output *shared.OutputEnum `queryParam:"style=form,explode=true,name=output"`
    TemplateID int64 `queryParam:"style=form,explode=true,name=templateId"`
    
}

type MergeTemplateRequest struct {
    QueryParams MergeTemplateQueryParams 
    Request shared.Data `request:"mediaType=application/json"`
    
}

type MergeTemplate200ApplicationJSONMeta struct {
    ContentType *string `json:"content-type,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    Encoding *string `json:"encoding,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type MergeTemplate200ApplicationJSON struct {
    Meta *MergeTemplate200ApplicationJSONMeta `json:"meta,omitempty"`
    Response *string `json:"response,omitempty"`
    
}


type MergeTemplate401ApplicationJSONErrorEnum string

const (
    MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed: request expired"
MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed: key missing"
MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
MergeTemplate401ApplicationJSONErrorEnumAuthenticationFailed MergeTemplate401ApplicationJSONErrorEnum = "Authentication failed"
)


type MergeTemplate401ApplicationJSON struct {
    Error *MergeTemplate401ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


type MergeTemplate403ApplicationJSONErrorEnum string

const (
    MergeTemplate403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit MergeTemplate403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)


type MergeTemplate403ApplicationJSON struct {
    Error *MergeTemplate403ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


type MergeTemplate404ApplicationJSONErrorEnum string

const (
    MergeTemplate404ApplicationJSONErrorEnumEntityNotFound MergeTemplate404ApplicationJSONErrorEnum = "Entity not found"
MergeTemplate404ApplicationJSONErrorEnumResourceNotFound MergeTemplate404ApplicationJSONErrorEnum = "Resource not found"
MergeTemplate404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace MergeTemplate404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)


type MergeTemplate404ApplicationJSON struct {
    Error *MergeTemplate404ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}


type MergeTemplate422ApplicationJSONErrorEnum string

const (
    MergeTemplate422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting MergeTemplate422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
MergeTemplate422ApplicationJSONErrorEnumRequiredParameterMissing MergeTemplate422ApplicationJSONErrorEnum = "Required parameter missing"
MergeTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined MergeTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
MergeTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined MergeTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)


type MergeTemplate422ApplicationJSON struct {
    Error *MergeTemplate422ApplicationJSONErrorEnum `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}

type MergeTemplate500ApplicationJSON struct {
    Error *string `json:"error,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}

type MergeTemplateResponse struct {
    ContentType string 
    StatusCode int64 
    MergeTemplate200ApplicationJSONObject *MergeTemplate200ApplicationJSON 
    MergeTemplate401ApplicationJSONObject *MergeTemplate401ApplicationJSON 
    MergeTemplate403ApplicationJSONObject *MergeTemplate403ApplicationJSON 
    MergeTemplate404ApplicationJSONObject *MergeTemplate404ApplicationJSON 
    MergeTemplate422ApplicationJSONObject *MergeTemplate422ApplicationJSON 
    MergeTemplate500ApplicationJSONObject *MergeTemplate500ApplicationJSON 
    
}

