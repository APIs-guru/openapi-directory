package operations

type DeleteTemplateQueryParams struct {
	TemplateID int64 `queryParam:"style=form,explode=true,name=templateId"`
}

type DeleteTemplateRequest struct {
	QueryParams DeleteTemplateQueryParams
}

type DeleteTemplate200ApplicationJSONResponse struct {
	Success *bool `json:"success"`
}

type DeleteTemplate200ApplicationJSON struct {
	Response *DeleteTemplate200ApplicationJSONResponse `json:"response"`
}

type DeleteTemplate401ApplicationJSONErrorEnum string

const (
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired                        DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed: request expired"
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing              DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing                      DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing                            DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed: key missing"
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt         DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt        DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer                      DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature                    DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
	DeleteTemplate401ApplicationJSONErrorEnumAuthenticationFailed                                      DeleteTemplate401ApplicationJSONErrorEnum = "Authentication failed"
)

type DeleteTemplate401ApplicationJSON struct {
	Error  *DeleteTemplate401ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                     `json:"status"`
}

type DeleteTemplate403ApplicationJSONErrorEnum string

const (
	DeleteTemplate403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit DeleteTemplate403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)

type DeleteTemplate403ApplicationJSON struct {
	Error  *DeleteTemplate403ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                     `json:"status"`
}

type DeleteTemplate404ApplicationJSONErrorEnum string

const (
	DeleteTemplate404ApplicationJSONErrorEnumEntityNotFound                               DeleteTemplate404ApplicationJSONErrorEnum = "Entity not found"
	DeleteTemplate404ApplicationJSONErrorEnumResourceNotFound                             DeleteTemplate404ApplicationJSONErrorEnum = "Resource not found"
	DeleteTemplate404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace DeleteTemplate404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)

type DeleteTemplate404ApplicationJSON struct {
	Error  *DeleteTemplate404ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                     `json:"status"`
}

type DeleteTemplate422ApplicationJSONErrorEnum string

const (
	DeleteTemplate422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting               DeleteTemplate422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
	DeleteTemplate422ApplicationJSONErrorEnumRequiredParameterMissing                             DeleteTemplate422ApplicationJSONErrorEnum = "Required parameter missing"
	DeleteTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined DeleteTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
	DeleteTemplate422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined           DeleteTemplate422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)

type DeleteTemplate422ApplicationJSON struct {
	Error  *DeleteTemplate422ApplicationJSONErrorEnum `json:"error"`
	Status *int64                                     `json:"status"`
}

type DeleteTemplate500ApplicationJSON struct {
	Error  *string `json:"error"`
	Status *int64  `json:"status"`
}

type DeleteTemplateResponse struct {
	ContentType                            string
	StatusCode                             int64
	DeleteTemplate200ApplicationJSONObject *DeleteTemplate200ApplicationJSON
	DeleteTemplate401ApplicationJSONObject *DeleteTemplate401ApplicationJSON
	DeleteTemplate403ApplicationJSONObject *DeleteTemplate403ApplicationJSON
	DeleteTemplate404ApplicationJSONObject *DeleteTemplate404ApplicationJSON
	DeleteTemplate422ApplicationJSONObject *DeleteTemplate422ApplicationJSON
	DeleteTemplate500ApplicationJSONObject *DeleteTemplate500ApplicationJSON
}
