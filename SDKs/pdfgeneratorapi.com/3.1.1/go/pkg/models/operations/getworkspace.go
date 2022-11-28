package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceQueryParams struct {
	WorkspaceID string `queryParam:"style=form,explode=true,name=workspaceId"`
}

type GetWorkspace200ApplicationJSON struct {
	Response *shared.Workspace `json:"response,omitempty"`
}

type GetWorkspace401ApplicationJSONErrorEnum string

const (
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired                        GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed: request expired"
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing              GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing                      GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing                            GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed: key missing"
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt         GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt        GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer                      GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature                    GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
	GetWorkspace401ApplicationJSONErrorEnumAuthenticationFailed                                      GetWorkspace401ApplicationJSONErrorEnum = "Authentication failed"
)

type GetWorkspace401ApplicationJSON struct {
	Error  *GetWorkspace401ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                   `json:"status,omitempty"`
}

type GetWorkspace403ApplicationJSONErrorEnum string

const (
	GetWorkspace403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit GetWorkspace403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)

type GetWorkspace403ApplicationJSON struct {
	Error  *GetWorkspace403ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                   `json:"status,omitempty"`
}

type GetWorkspace404ApplicationJSONErrorEnum string

const (
	GetWorkspace404ApplicationJSONErrorEnumEntityNotFound                               GetWorkspace404ApplicationJSONErrorEnum = "Entity not found"
	GetWorkspace404ApplicationJSONErrorEnumResourceNotFound                             GetWorkspace404ApplicationJSONErrorEnum = "Resource not found"
	GetWorkspace404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace GetWorkspace404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)

type GetWorkspace404ApplicationJSON struct {
	Error  *GetWorkspace404ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                   `json:"status,omitempty"`
}

type GetWorkspace422ApplicationJSONErrorEnum string

const (
	GetWorkspace422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting               GetWorkspace422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
	GetWorkspace422ApplicationJSONErrorEnumRequiredParameterMissing                             GetWorkspace422ApplicationJSONErrorEnum = "Required parameter missing"
	GetWorkspace422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined GetWorkspace422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
	GetWorkspace422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined           GetWorkspace422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)

type GetWorkspace422ApplicationJSON struct {
	Error  *GetWorkspace422ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                   `json:"status,omitempty"`
}

type GetWorkspace500ApplicationJSON struct {
	Error  *string `json:"error,omitempty"`
	Status *int64  `json:"status,omitempty"`
}

type GetWorkspaceRequest struct {
	QueryParams GetWorkspaceQueryParams
}

type GetWorkspaceResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetWorkspace200ApplicationJSONObject *GetWorkspace200ApplicationJSON
	GetWorkspace401ApplicationJSONObject *GetWorkspace401ApplicationJSON
	GetWorkspace403ApplicationJSONObject *GetWorkspace403ApplicationJSON
	GetWorkspace404ApplicationJSONObject *GetWorkspace404ApplicationJSON
	GetWorkspace422ApplicationJSONObject *GetWorkspace422ApplicationJSON
	GetWorkspace500ApplicationJSONObject *GetWorkspace500ApplicationJSON
}
