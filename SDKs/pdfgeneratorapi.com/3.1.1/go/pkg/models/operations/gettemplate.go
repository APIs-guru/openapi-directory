package operations

import (
	"openapi/pkg/models/shared"
)

type GetTemplateQueryParams struct {
	TemplateID int64 `queryParam:"style=form,explode=true,name=templateId"`
}

type GetTemplateRequest struct {
	QueryParams GetTemplateQueryParams
}

type GetTemplate200ApplicationJSON struct {
	Response *shared.TemplateDefinition `json:"response,omitempty"`
}

type GetTemplate401ApplicationJSONErrorEnum string

const (
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired                        GetTemplate401ApplicationJSONErrorEnum = "Authentication failed: request expired"
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing              GetTemplate401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing                      GetTemplate401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing                            GetTemplate401ApplicationJSONErrorEnum = "Authentication failed: key missing"
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt         GetTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt        GetTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt GetTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer                      GetTemplate401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature                    GetTemplate401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
	GetTemplate401ApplicationJSONErrorEnumAuthenticationFailed                                      GetTemplate401ApplicationJSONErrorEnum = "Authentication failed"
)

type GetTemplate401ApplicationJSON struct {
	Error  *GetTemplate401ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                  `json:"status,omitempty"`
}

type GetTemplate403ApplicationJSONErrorEnum string

const (
	GetTemplate403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit GetTemplate403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)

type GetTemplate403ApplicationJSON struct {
	Error  *GetTemplate403ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                  `json:"status,omitempty"`
}

type GetTemplate404ApplicationJSONErrorEnum string

const (
	GetTemplate404ApplicationJSONErrorEnumEntityNotFound                               GetTemplate404ApplicationJSONErrorEnum = "Entity not found"
	GetTemplate404ApplicationJSONErrorEnumResourceNotFound                             GetTemplate404ApplicationJSONErrorEnum = "Resource not found"
	GetTemplate404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace GetTemplate404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)

type GetTemplate404ApplicationJSON struct {
	Error  *GetTemplate404ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                  `json:"status,omitempty"`
}

type GetTemplate422ApplicationJSONErrorEnum string

const (
	GetTemplate422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting               GetTemplate422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
	GetTemplate422ApplicationJSONErrorEnumRequiredParameterMissing                             GetTemplate422ApplicationJSONErrorEnum = "Required parameter missing"
	GetTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined GetTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
	GetTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined           GetTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)

type GetTemplate422ApplicationJSON struct {
	Error  *GetTemplate422ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                  `json:"status,omitempty"`
}

type GetTemplate500ApplicationJSON struct {
	Error  *string `json:"error,omitempty"`
	Status *int64  `json:"status,omitempty"`
}

type GetTemplateResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetTemplate200ApplicationJSONObject *GetTemplate200ApplicationJSON
	GetTemplate401ApplicationJSONObject *GetTemplate401ApplicationJSON
	GetTemplate403ApplicationJSONObject *GetTemplate403ApplicationJSON
	GetTemplate404ApplicationJSONObject *GetTemplate404ApplicationJSON
	GetTemplate422ApplicationJSONObject *GetTemplate422ApplicationJSON
	GetTemplate500ApplicationJSONObject *GetTemplate500ApplicationJSON
}
