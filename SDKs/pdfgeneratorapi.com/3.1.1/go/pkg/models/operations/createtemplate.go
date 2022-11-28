package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTemplate200ApplicationJSON struct {
	Response *shared.TemplateDefinition `json:"response,omitempty"`
}

type CreateTemplate401ApplicationJSONErrorEnum string

const (
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired                        CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed: request expired"
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing              CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing                      CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing                            CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed: key missing"
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt         CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt        CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer                      CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature                    CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
	CreateTemplate401ApplicationJSONErrorEnumAuthenticationFailed                                      CreateTemplate401ApplicationJSONErrorEnum = "Authentication failed"
)

type CreateTemplate401ApplicationJSON struct {
	Error  *CreateTemplate401ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                     `json:"status,omitempty"`
}

type CreateTemplate403ApplicationJSONErrorEnum string

const (
	CreateTemplate403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit CreateTemplate403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)

type CreateTemplate403ApplicationJSON struct {
	Error  *CreateTemplate403ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                     `json:"status,omitempty"`
}

type CreateTemplate404ApplicationJSONErrorEnum string

const (
	CreateTemplate404ApplicationJSONErrorEnumEntityNotFound                               CreateTemplate404ApplicationJSONErrorEnum = "Entity not found"
	CreateTemplate404ApplicationJSONErrorEnumResourceNotFound                             CreateTemplate404ApplicationJSONErrorEnum = "Resource not found"
	CreateTemplate404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace CreateTemplate404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)

type CreateTemplate404ApplicationJSON struct {
	Error  *CreateTemplate404ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                     `json:"status,omitempty"`
}

type CreateTemplate422ApplicationJSONErrorEnum string

const (
	CreateTemplate422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting               CreateTemplate422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
	CreateTemplate422ApplicationJSONErrorEnumRequiredParameterMissing                             CreateTemplate422ApplicationJSONErrorEnum = "Required parameter missing"
	CreateTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined CreateTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
	CreateTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined           CreateTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)

type CreateTemplate422ApplicationJSON struct {
	Error  *CreateTemplate422ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                     `json:"status,omitempty"`
}

type CreateTemplate500ApplicationJSON struct {
	Error  *string `json:"error,omitempty"`
	Status *int64  `json:"status,omitempty"`
}

type CreateTemplateRequest struct {
	Request shared.TemplateDefinitionNew `request:"mediaType=application/json"`
}

type CreateTemplateResponse struct {
	ContentType                            string
	StatusCode                             int64
	CreateTemplate200ApplicationJSONObject *CreateTemplate200ApplicationJSON
	CreateTemplate401ApplicationJSONObject *CreateTemplate401ApplicationJSON
	CreateTemplate403ApplicationJSONObject *CreateTemplate403ApplicationJSON
	CreateTemplate404ApplicationJSONObject *CreateTemplate404ApplicationJSON
	CreateTemplate422ApplicationJSONObject *CreateTemplate422ApplicationJSON
	CreateTemplate500ApplicationJSONObject *CreateTemplate500ApplicationJSON
}
