package shared

type APIResponseObjectStatusCodeEnum string

const (
	APIResponseObjectStatusCodeEnumContinue                     APIResponseObjectStatusCodeEnum = "Continue"
	APIResponseObjectStatusCodeEnumSwitchingProtocols           APIResponseObjectStatusCodeEnum = "SwitchingProtocols"
	APIResponseObjectStatusCodeEnumOk                           APIResponseObjectStatusCodeEnum = "OK"
	APIResponseObjectStatusCodeEnumCreated                      APIResponseObjectStatusCodeEnum = "Created"
	APIResponseObjectStatusCodeEnumAccepted                     APIResponseObjectStatusCodeEnum = "Accepted"
	APIResponseObjectStatusCodeEnumNonAuthoritativeInformation  APIResponseObjectStatusCodeEnum = "NonAuthoritativeInformation"
	APIResponseObjectStatusCodeEnumNoContent                    APIResponseObjectStatusCodeEnum = "NoContent"
	APIResponseObjectStatusCodeEnumResetContent                 APIResponseObjectStatusCodeEnum = "ResetContent"
	APIResponseObjectStatusCodeEnumPartialContent               APIResponseObjectStatusCodeEnum = "PartialContent"
	APIResponseObjectStatusCodeEnumMultipleChoices              APIResponseObjectStatusCodeEnum = "MultipleChoices"
	APIResponseObjectStatusCodeEnumAmbiguous                    APIResponseObjectStatusCodeEnum = "Ambiguous"
	APIResponseObjectStatusCodeEnumMovedPermanently             APIResponseObjectStatusCodeEnum = "MovedPermanently"
	APIResponseObjectStatusCodeEnumMoved                        APIResponseObjectStatusCodeEnum = "Moved"
	APIResponseObjectStatusCodeEnumFound                        APIResponseObjectStatusCodeEnum = "Found"
	APIResponseObjectStatusCodeEnumRedirect                     APIResponseObjectStatusCodeEnum = "Redirect"
	APIResponseObjectStatusCodeEnumSeeOther                     APIResponseObjectStatusCodeEnum = "SeeOther"
	APIResponseObjectStatusCodeEnumRedirectMethod               APIResponseObjectStatusCodeEnum = "RedirectMethod"
	APIResponseObjectStatusCodeEnumNotModified                  APIResponseObjectStatusCodeEnum = "NotModified"
	APIResponseObjectStatusCodeEnumUseProxy                     APIResponseObjectStatusCodeEnum = "UseProxy"
	APIResponseObjectStatusCodeEnumUnused                       APIResponseObjectStatusCodeEnum = "Unused"
	APIResponseObjectStatusCodeEnumTemporaryRedirect            APIResponseObjectStatusCodeEnum = "TemporaryRedirect"
	APIResponseObjectStatusCodeEnumRedirectKeepVerb             APIResponseObjectStatusCodeEnum = "RedirectKeepVerb"
	APIResponseObjectStatusCodeEnumBadRequest                   APIResponseObjectStatusCodeEnum = "BadRequest"
	APIResponseObjectStatusCodeEnumUnauthorized                 APIResponseObjectStatusCodeEnum = "Unauthorized"
	APIResponseObjectStatusCodeEnumPaymentRequired              APIResponseObjectStatusCodeEnum = "PaymentRequired"
	APIResponseObjectStatusCodeEnumForbidden                    APIResponseObjectStatusCodeEnum = "Forbidden"
	APIResponseObjectStatusCodeEnumNotFound                     APIResponseObjectStatusCodeEnum = "NotFound"
	APIResponseObjectStatusCodeEnumMethodNotAllowed             APIResponseObjectStatusCodeEnum = "MethodNotAllowed"
	APIResponseObjectStatusCodeEnumNotAcceptable                APIResponseObjectStatusCodeEnum = "NotAcceptable"
	APIResponseObjectStatusCodeEnumProxyAuthenticationRequired  APIResponseObjectStatusCodeEnum = "ProxyAuthenticationRequired"
	APIResponseObjectStatusCodeEnumRequestTimeout               APIResponseObjectStatusCodeEnum = "RequestTimeout"
	APIResponseObjectStatusCodeEnumConflict                     APIResponseObjectStatusCodeEnum = "Conflict"
	APIResponseObjectStatusCodeEnumGone                         APIResponseObjectStatusCodeEnum = "Gone"
	APIResponseObjectStatusCodeEnumLengthRequired               APIResponseObjectStatusCodeEnum = "LengthRequired"
	APIResponseObjectStatusCodeEnumPreconditionFailed           APIResponseObjectStatusCodeEnum = "PreconditionFailed"
	APIResponseObjectStatusCodeEnumRequestEntityTooLarge        APIResponseObjectStatusCodeEnum = "RequestEntityTooLarge"
	APIResponseObjectStatusCodeEnumRequestURITooLong            APIResponseObjectStatusCodeEnum = "RequestUriTooLong"
	APIResponseObjectStatusCodeEnumUnsupportedMediaType         APIResponseObjectStatusCodeEnum = "UnsupportedMediaType"
	APIResponseObjectStatusCodeEnumRequestedRangeNotSatisfiable APIResponseObjectStatusCodeEnum = "RequestedRangeNotSatisfiable"
	APIResponseObjectStatusCodeEnumExpectationFailed            APIResponseObjectStatusCodeEnum = "ExpectationFailed"
	APIResponseObjectStatusCodeEnumUpgradeRequired              APIResponseObjectStatusCodeEnum = "UpgradeRequired"
	APIResponseObjectStatusCodeEnumInternalServerError          APIResponseObjectStatusCodeEnum = "InternalServerError"
	APIResponseObjectStatusCodeEnumNotImplemented               APIResponseObjectStatusCodeEnum = "NotImplemented"
	APIResponseObjectStatusCodeEnumBadGateway                   APIResponseObjectStatusCodeEnum = "BadGateway"
	APIResponseObjectStatusCodeEnumServiceUnavailable           APIResponseObjectStatusCodeEnum = "ServiceUnavailable"
	APIResponseObjectStatusCodeEnumGatewayTimeout               APIResponseObjectStatusCodeEnum = "GatewayTimeout"
	APIResponseObjectStatusCodeEnumHTTPVersionNotSupported      APIResponseObjectStatusCodeEnum = "HttpVersionNotSupported"
)

type APIResponseObject struct {
	Errors     []string                         `json:"Errors"`
	PagingInfo *PagingInfo                      `json:"PagingInfo"`
	Response   map[string]interface{}           `json:"Response"`
	StatusCode *APIResponseObjectStatusCodeEnum `json:"StatusCode"`
	Success    *bool                            `json:"Success"`
}
