package operations

type DeleteWorkspaceQueryParams struct {
	WorkspaceID string `queryParam:"style=form,explode=true,name=workspaceId"`
}

type DeleteWorkspaceRequest struct {
	QueryParams DeleteWorkspaceQueryParams
}

type DeleteWorkspace200ApplicationJSONResponse struct {
	Success *bool `json:"success"`
}

type DeleteWorkspace200ApplicationJSON struct {
	Response *DeleteWorkspace200ApplicationJSONResponse `json:"response"`
}

type DeleteWorkspace401ApplicationJSONErrorEnum string

const (
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired                        DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed: request expired"
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing              DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing                      DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing                            DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed: key missing"
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt         DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt        DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer                      DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature                    DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
	DeleteWorkspace401ApplicationJSONErrorEnumAuthenticationFailed                                      DeleteWorkspace401ApplicationJSONErrorEnum = "Authentication failed"
)

type DeleteWorkspace401ApplicationJSON struct {
	Error  *DeleteWorkspace401ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                      `json:"status"`
}

type DeleteWorkspace403ApplicationJSONErrorEnum string

const (
	DeleteWorkspace403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit DeleteWorkspace403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)

type DeleteWorkspace403ApplicationJSON struct {
	Error  *DeleteWorkspace403ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                      `json:"status"`
}

type DeleteWorkspace404ApplicationJSONErrorEnum string

const (
	DeleteWorkspace404ApplicationJSONErrorEnumEntityNotFound                               DeleteWorkspace404ApplicationJSONErrorEnum = "Entity not found"
	DeleteWorkspace404ApplicationJSONErrorEnumResourceNotFound                             DeleteWorkspace404ApplicationJSONErrorEnum = "Resource not found"
	DeleteWorkspace404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace DeleteWorkspace404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)

type DeleteWorkspace404ApplicationJSON struct {
	Error  *DeleteWorkspace404ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                      `json:"status"`
}

type DeleteWorkspace422ApplicationJSONErrorEnum string

const (
	DeleteWorkspace422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting               DeleteWorkspace422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
	DeleteWorkspace422ApplicationJSONErrorEnumRequiredParameterMissing                             DeleteWorkspace422ApplicationJSONErrorEnum = "Required parameter missing"
	DeleteWorkspace422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined DeleteWorkspace422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
	DeleteWorkspace422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined           DeleteWorkspace422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)

type DeleteWorkspace422ApplicationJSON struct {
	Error  *DeleteWorkspace422ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                      `json:"status"`
}

type DeleteWorkspace500ApplicationJSON struct {
	Error  *string `json:"error"`
	Status *int64  `json:"status"`
}

type DeleteWorkspaceResponse struct {
	ContentType                             string
	StatusCode                              int64
	DeleteWorkspace200ApplicationJSONObject *DeleteWorkspace200ApplicationJSON
	DeleteWorkspace401ApplicationJSONObject *DeleteWorkspace401ApplicationJSON
	DeleteWorkspace403ApplicationJSONObject *DeleteWorkspace403ApplicationJSON
	DeleteWorkspace404ApplicationJSONObject *DeleteWorkspace404ApplicationJSON
	DeleteWorkspace422ApplicationJSONObject *DeleteWorkspace422ApplicationJSON
	DeleteWorkspace500ApplicationJSONObject *DeleteWorkspace500ApplicationJSON
}
