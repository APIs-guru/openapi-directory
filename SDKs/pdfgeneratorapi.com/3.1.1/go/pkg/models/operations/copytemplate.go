package operations

import (
	"openapi/pkg/models/shared"
)

type CopyTemplateQueryParams struct {
	Name       *string `queryParam:"style=form,explode=true,name=name"`
	TemplateID int64   `queryParam:"style=form,explode=true,name=templateId"`
}

type CopyTemplateRequest struct {
	QueryParams CopyTemplateQueryParams
}

type CopyTemplate200ApplicationJSON struct {
	Response *shared.TemplateDefinition `json:"response"`
}

type CopyTemplate401ApplicationJSONErrorEnum string

const (
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired                        CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed: request expired"
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing              CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing                      CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing                            CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed: key missing"
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt         CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt        CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer                      CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature                    CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
	CopyTemplate401ApplicationJSONErrorEnumAuthenticationFailed                                      CopyTemplate401ApplicationJSONErrorEnum = "Authentication failed"
)

type CopyTemplate401ApplicationJSON struct {
	Error  *CopyTemplate401ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                   `json:"status"`
}

type CopyTemplate403ApplicationJSONErrorEnum string

const (
	CopyTemplate403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit CopyTemplate403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)

type CopyTemplate403ApplicationJSON struct {
	Error  *CopyTemplate403ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                   `json:"status"`
}

type CopyTemplate404ApplicationJSONErrorEnum string

const (
	CopyTemplate404ApplicationJSONErrorEnumEntityNotFound                               CopyTemplate404ApplicationJSONErrorEnum = "Entity not found"
	CopyTemplate404ApplicationJSONErrorEnumResourceNotFound                             CopyTemplate404ApplicationJSONErrorEnum = "Resource not found"
	CopyTemplate404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace CopyTemplate404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)

type CopyTemplate404ApplicationJSON struct {
	Error  *CopyTemplate404ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                   `json:"status"`
}

type CopyTemplate422ApplicationJSONErrorEnum string

const (
	CopyTemplate422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting               CopyTemplate422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
	CopyTemplate422ApplicationJSONErrorEnumRequiredParameterMissing                             CopyTemplate422ApplicationJSONErrorEnum = "Required parameter missing"
	CopyTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined CopyTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
	CopyTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined           CopyTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)

type CopyTemplate422ApplicationJSON struct {
	Error  *CopyTemplate422ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                   `json:"status"`
}

type CopyTemplate500ApplicationJSON struct {
	Error  *string `json:"error"`
	Status *int64  `json:"status"`
}

type CopyTemplateResponse struct {
	ContentType                          string
	StatusCode                           int64
	CopyTemplate200ApplicationJSONObject *CopyTemplate200ApplicationJSON
	CopyTemplate401ApplicationJSONObject *CopyTemplate401ApplicationJSON
	CopyTemplate403ApplicationJSONObject *CopyTemplate403ApplicationJSON
	CopyTemplate404ApplicationJSONObject *CopyTemplate404ApplicationJSON
	CopyTemplate422ApplicationJSONObject *CopyTemplate422ApplicationJSON
	CopyTemplate500ApplicationJSONObject *CopyTemplate500ApplicationJSON
}
