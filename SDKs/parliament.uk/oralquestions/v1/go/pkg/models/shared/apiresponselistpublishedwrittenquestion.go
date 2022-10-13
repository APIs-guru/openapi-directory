package shared

type APIResponseListPublishedWrittenQuestionStatusCodeEnum string

const (
	APIResponseListPublishedWrittenQuestionStatusCodeEnumContinue                     APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Continue"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumSwitchingProtocols           APIResponseListPublishedWrittenQuestionStatusCodeEnum = "SwitchingProtocols"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumOk                           APIResponseListPublishedWrittenQuestionStatusCodeEnum = "OK"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumCreated                      APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Created"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumAccepted                     APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Accepted"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumNonAuthoritativeInformation  APIResponseListPublishedWrittenQuestionStatusCodeEnum = "NonAuthoritativeInformation"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumNoContent                    APIResponseListPublishedWrittenQuestionStatusCodeEnum = "NoContent"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumResetContent                 APIResponseListPublishedWrittenQuestionStatusCodeEnum = "ResetContent"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumPartialContent               APIResponseListPublishedWrittenQuestionStatusCodeEnum = "PartialContent"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumMultipleChoices              APIResponseListPublishedWrittenQuestionStatusCodeEnum = "MultipleChoices"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumAmbiguous                    APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Ambiguous"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumMovedPermanently             APIResponseListPublishedWrittenQuestionStatusCodeEnum = "MovedPermanently"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumMoved                        APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Moved"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumFound                        APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Found"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumRedirect                     APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Redirect"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumSeeOther                     APIResponseListPublishedWrittenQuestionStatusCodeEnum = "SeeOther"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumRedirectMethod               APIResponseListPublishedWrittenQuestionStatusCodeEnum = "RedirectMethod"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumNotModified                  APIResponseListPublishedWrittenQuestionStatusCodeEnum = "NotModified"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumUseProxy                     APIResponseListPublishedWrittenQuestionStatusCodeEnum = "UseProxy"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumUnused                       APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Unused"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumTemporaryRedirect            APIResponseListPublishedWrittenQuestionStatusCodeEnum = "TemporaryRedirect"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumRedirectKeepVerb             APIResponseListPublishedWrittenQuestionStatusCodeEnum = "RedirectKeepVerb"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumBadRequest                   APIResponseListPublishedWrittenQuestionStatusCodeEnum = "BadRequest"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumUnauthorized                 APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Unauthorized"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumPaymentRequired              APIResponseListPublishedWrittenQuestionStatusCodeEnum = "PaymentRequired"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumForbidden                    APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Forbidden"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumNotFound                     APIResponseListPublishedWrittenQuestionStatusCodeEnum = "NotFound"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumMethodNotAllowed             APIResponseListPublishedWrittenQuestionStatusCodeEnum = "MethodNotAllowed"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumNotAcceptable                APIResponseListPublishedWrittenQuestionStatusCodeEnum = "NotAcceptable"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumProxyAuthenticationRequired  APIResponseListPublishedWrittenQuestionStatusCodeEnum = "ProxyAuthenticationRequired"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumRequestTimeout               APIResponseListPublishedWrittenQuestionStatusCodeEnum = "RequestTimeout"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumConflict                     APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Conflict"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumGone                         APIResponseListPublishedWrittenQuestionStatusCodeEnum = "Gone"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumLengthRequired               APIResponseListPublishedWrittenQuestionStatusCodeEnum = "LengthRequired"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumPreconditionFailed           APIResponseListPublishedWrittenQuestionStatusCodeEnum = "PreconditionFailed"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumRequestEntityTooLarge        APIResponseListPublishedWrittenQuestionStatusCodeEnum = "RequestEntityTooLarge"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumRequestURITooLong            APIResponseListPublishedWrittenQuestionStatusCodeEnum = "RequestUriTooLong"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumUnsupportedMediaType         APIResponseListPublishedWrittenQuestionStatusCodeEnum = "UnsupportedMediaType"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumRequestedRangeNotSatisfiable APIResponseListPublishedWrittenQuestionStatusCodeEnum = "RequestedRangeNotSatisfiable"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumExpectationFailed            APIResponseListPublishedWrittenQuestionStatusCodeEnum = "ExpectationFailed"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumUpgradeRequired              APIResponseListPublishedWrittenQuestionStatusCodeEnum = "UpgradeRequired"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumInternalServerError          APIResponseListPublishedWrittenQuestionStatusCodeEnum = "InternalServerError"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumNotImplemented               APIResponseListPublishedWrittenQuestionStatusCodeEnum = "NotImplemented"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumBadGateway                   APIResponseListPublishedWrittenQuestionStatusCodeEnum = "BadGateway"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumServiceUnavailable           APIResponseListPublishedWrittenQuestionStatusCodeEnum = "ServiceUnavailable"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumGatewayTimeout               APIResponseListPublishedWrittenQuestionStatusCodeEnum = "GatewayTimeout"
	APIResponseListPublishedWrittenQuestionStatusCodeEnumHTTPVersionNotSupported      APIResponseListPublishedWrittenQuestionStatusCodeEnum = "HttpVersionNotSupported"
)

type APIResponseListPublishedWrittenQuestion struct {
	Errors     []string                                               `json:"Errors"`
	PagingInfo *PagingInfo                                            `json:"PagingInfo"`
	Response   []PublishedWrittenQuestion                             `json:"Response"`
	StatusCode *APIResponseListPublishedWrittenQuestionStatusCodeEnum `json:"StatusCode"`
	Success    *bool                                                  `json:"Success"`
}
