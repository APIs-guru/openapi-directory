package operations

import (
	"openapi/pkg/models/shared"
)

type MergeTemplatesQueryParams struct {
	Format *shared.FormatEnum `queryParam:"style=form,explode=true,name=format"`
	Name   *string            `queryParam:"style=form,explode=true,name=name"`
	Output *shared.OutputEnum `queryParam:"style=form,explode=true,name=output"`
}

type MergeTemplates200ApplicationJSONMeta struct {
	ContentType *string `json:"content-type,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	Encoding    *string `json:"encoding,omitempty"`
	Name        *string `json:"name,omitempty"`
}

type MergeTemplates200ApplicationJSON struct {
	Meta     *MergeTemplates200ApplicationJSONMeta `json:"meta,omitempty"`
	Response *string                               `json:"response,omitempty"`
}

type MergeTemplates401ApplicationJSONErrorEnum string

const (
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired                        MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed: request expired"
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing              MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing                      MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing                            MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed: key missing"
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt         MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt        MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer                      MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature                    MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
	MergeTemplates401ApplicationJSONErrorEnumAuthenticationFailed                                      MergeTemplates401ApplicationJSONErrorEnum = "Authentication failed"
)

type MergeTemplates401ApplicationJSON struct {
	Error  *MergeTemplates401ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                     `json:"status,omitempty"`
}

type MergeTemplates403ApplicationJSONErrorEnum string

const (
	MergeTemplates403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit MergeTemplates403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)

type MergeTemplates403ApplicationJSON struct {
	Error  *MergeTemplates403ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                     `json:"status,omitempty"`
}

type MergeTemplates404ApplicationJSONErrorEnum string

const (
	MergeTemplates404ApplicationJSONErrorEnumEntityNotFound                               MergeTemplates404ApplicationJSONErrorEnum = "Entity not found"
	MergeTemplates404ApplicationJSONErrorEnumResourceNotFound                             MergeTemplates404ApplicationJSONErrorEnum = "Resource not found"
	MergeTemplates404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace MergeTemplates404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)

type MergeTemplates404ApplicationJSON struct {
	Error  *MergeTemplates404ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                     `json:"status,omitempty"`
}

type MergeTemplates422ApplicationJSONErrorEnum string

const (
	MergeTemplates422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting               MergeTemplates422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
	MergeTemplates422ApplicationJSONErrorEnumRequiredParameterMissing                             MergeTemplates422ApplicationJSONErrorEnum = "Required parameter missing"
	MergeTemplates422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined MergeTemplates422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
	MergeTemplates422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined           MergeTemplates422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)

type MergeTemplates422ApplicationJSON struct {
	Error  *MergeTemplates422ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                     `json:"status,omitempty"`
}

type MergeTemplates500ApplicationJSON struct {
	Error  *string `json:"error,omitempty"`
	Status *int64  `json:"status,omitempty"`
}

type MergeTemplatesRequest struct {
	QueryParams MergeTemplatesQueryParams
	Request     []shared.BatchData `request:"mediaType=application/json"`
}

type MergeTemplatesResponse struct {
	ContentType                            string
	StatusCode                             int64
	MergeTemplates200ApplicationJSONObject *MergeTemplates200ApplicationJSON
	MergeTemplates401ApplicationJSONObject *MergeTemplates401ApplicationJSON
	MergeTemplates403ApplicationJSONObject *MergeTemplates403ApplicationJSON
	MergeTemplates404ApplicationJSONObject *MergeTemplates404ApplicationJSON
	MergeTemplates422ApplicationJSONObject *MergeTemplates422ApplicationJSON
	MergeTemplates500ApplicationJSONObject *MergeTemplates500ApplicationJSON
}
