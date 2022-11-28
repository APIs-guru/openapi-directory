import { SpeakeasyBase } from "../../../internal/utils";
import { PagingInfo } from "./paginginfo";
import { PublishedWrittenQuestion } from "./publishedwrittenquestion";
export declare enum ApiResponseListPublishedWrittenQuestionStatusCodeEnum {
    Continue = "Continue",
    SwitchingProtocols = "SwitchingProtocols",
    Ok = "OK",
    Created = "Created",
    Accepted = "Accepted",
    NonAuthoritativeInformation = "NonAuthoritativeInformation",
    NoContent = "NoContent",
    ResetContent = "ResetContent",
    PartialContent = "PartialContent",
    MultipleChoices = "MultipleChoices",
    Ambiguous = "Ambiguous",
    MovedPermanently = "MovedPermanently",
    Moved = "Moved",
    Found = "Found",
    Redirect = "Redirect",
    SeeOther = "SeeOther",
    RedirectMethod = "RedirectMethod",
    NotModified = "NotModified",
    UseProxy = "UseProxy",
    Unused = "Unused",
    TemporaryRedirect = "TemporaryRedirect",
    RedirectKeepVerb = "RedirectKeepVerb",
    BadRequest = "BadRequest",
    Unauthorized = "Unauthorized",
    PaymentRequired = "PaymentRequired",
    Forbidden = "Forbidden",
    NotFound = "NotFound",
    MethodNotAllowed = "MethodNotAllowed",
    NotAcceptable = "NotAcceptable",
    ProxyAuthenticationRequired = "ProxyAuthenticationRequired",
    RequestTimeout = "RequestTimeout",
    Conflict = "Conflict",
    Gone = "Gone",
    LengthRequired = "LengthRequired",
    PreconditionFailed = "PreconditionFailed",
    RequestEntityTooLarge = "RequestEntityTooLarge",
    RequestUriTooLong = "RequestUriTooLong",
    UnsupportedMediaType = "UnsupportedMediaType",
    RequestedRangeNotSatisfiable = "RequestedRangeNotSatisfiable",
    ExpectationFailed = "ExpectationFailed",
    UpgradeRequired = "UpgradeRequired",
    InternalServerError = "InternalServerError",
    NotImplemented = "NotImplemented",
    BadGateway = "BadGateway",
    ServiceUnavailable = "ServiceUnavailable",
    GatewayTimeout = "GatewayTimeout",
    HttpVersionNotSupported = "HttpVersionNotSupported"
}
export declare class ApiResponseListPublishedWrittenQuestion extends SpeakeasyBase {
    errors?: string[];
    pagingInfo?: PagingInfo;
    response?: PublishedWrittenQuestion[];
    statusCode?: ApiResponseListPublishedWrittenQuestionStatusCodeEnum;
    success?: boolean;
}
