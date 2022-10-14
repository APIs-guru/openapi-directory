package operations

type GetEditorURLLanguageEnum string

const (
	GetEditorURLLanguageEnumEn GetEditorURLLanguageEnum = "en"
	GetEditorURLLanguageEnumEt GetEditorURLLanguageEnum = "et"
	GetEditorURLLanguageEnumCs GetEditorURLLanguageEnum = "cs"
	GetEditorURLLanguageEnumSk GetEditorURLLanguageEnum = "sk"
	GetEditorURLLanguageEnumRu GetEditorURLLanguageEnum = "ru"
)

type GetEditorURLQueryParams struct {
	Language   *GetEditorURLLanguageEnum `queryParam:"style=form,explode=true,name=language"`
	TemplateID int64                     `queryParam:"style=form,explode=true,name=templateId"`
}

type GetEditorURLRequest struct {
	QueryParams GetEditorURLQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type GetEditorURL200ApplicationJSON struct {
	Response *string `json:"response,omitempty"`
}

type GetEditorURL401ApplicationJSONErrorEnum string

const (
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailedRequestExpired                        GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed: request expired"
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailedSignatureOrSecretMissing              GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed: signature or secret missing"
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailedWorkspaceMissing                      GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed: workspace missing"
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailedKeyMissing                            GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed: key missing"
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailedPropertyIssIssuerMissingInJwt         GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed: property 'iss' (issuer) missing in JWT"
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailedPropertySubSubjectMissingInJwt        GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed: property 'sub' (subject) missing in JWT"
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailedPropertyExpExpirationTimeMissingInJwt GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed: property 'exp' (expiration time) missing in JWT"
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailedInvalidIssIssuer                      GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed: invalid 'iss' (issuer)"
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailedIncorrectSignature                    GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed: incorrect signature"
	GetEditorURL401ApplicationJSONErrorEnumAuthenticationFailed                                      GetEditorURL401ApplicationJSONErrorEnum = "Authentication failed"
)

type GetEditorURL401ApplicationJSON struct {
	Error  *GetEditorURL401ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                   `json:"status,omitempty"`
}

type GetEditorURL403ApplicationJSONErrorEnum string

const (
	GetEditorURL403ApplicationJSONErrorEnumYourAccountHasExceededTheMonthlyDocumentGenerationLimit GetEditorURL403ApplicationJSONErrorEnum = "Your account has exceeded the monthly document generation limit."
)

type GetEditorURL403ApplicationJSON struct {
	Error  *GetEditorURL403ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                   `json:"status,omitempty"`
}

type GetEditorURL404ApplicationJSONErrorEnum string

const (
	GetEditorURL404ApplicationJSONErrorEnumEntityNotFound                               GetEditorURL404ApplicationJSONErrorEnum = "Entity not found"
	GetEditorURL404ApplicationJSONErrorEnumResourceNotFound                             GetEditorURL404ApplicationJSONErrorEnum = "Resource not found"
	GetEditorURL404ApplicationJSONErrorEnumNoneOfTheTemplatesIsAvailableForTheWorkspace GetEditorURL404ApplicationJSONErrorEnum = "None of the templates is available for the workspace."
)

type GetEditorURL404ApplicationJSON struct {
	Error  *GetEditorURL404ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                   `json:"status,omitempty"`
}

type GetEditorURL422ApplicationJSONErrorEnum string

const (
	GetEditorURL422ApplicationJSONErrorEnumUnableToParseJSONPleaseCheckFormatting               GetEditorURL422ApplicationJSONErrorEnum = "Unable to parse JSON, please check formatting"
	GetEditorURL422ApplicationJSONErrorEnumRequiredParameterMissing                             GetEditorURL422ApplicationJSONErrorEnum = "Required parameter missing"
	GetEditorURL422ApplicationJSONErrorEnumRequiredParameterMissingTemplateDefinitionNotDefined GetEditorURL422ApplicationJSONErrorEnum = "Required parameter missing: template definition not defined"
	GetEditorURL422ApplicationJSONErrorEnumRequiredParameterMissingTemplateNotDefined           GetEditorURL422ApplicationJSONErrorEnum = "Required parameter missing: template not defined"
)

type GetEditorURL422ApplicationJSON struct {
	Error  *GetEditorURL422ApplicationJSONErrorEnum `json:"error,omitempty"`
	Status *int64                                   `json:"status,omitempty"`
}

type GetEditorURL500ApplicationJSON struct {
	Error  *string `json:"error,omitempty"`
	Status *int64  `json:"status,omitempty"`
}

type GetEditorURLResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetEditorURL200ApplicationJSONObject *GetEditorURL200ApplicationJSON
	GetEditorURL401ApplicationJSONObject *GetEditorURL401ApplicationJSON
	GetEditorURL403ApplicationJSONObject *GetEditorURL403ApplicationJSON
	GetEditorURL404ApplicationJSONObject *GetEditorURL404ApplicationJSON
	GetEditorURL422ApplicationJSONObject *GetEditorURL422ApplicationJSON
	GetEditorURL500ApplicationJSONObject *GetEditorURL500ApplicationJSON
}
