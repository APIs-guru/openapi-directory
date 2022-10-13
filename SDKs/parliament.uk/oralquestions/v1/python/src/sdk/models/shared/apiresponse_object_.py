from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import paginginfo

class APIResponseObjectStatusCodeEnum(str, Enum):
    CONTINUE = "Continue"
    SWITCHING_PROTOCOLS = "SwitchingProtocols"
    OK = "OK"
    CREATED = "Created"
    ACCEPTED = "Accepted"
    NON_AUTHORITATIVE_INFORMATION = "NonAuthoritativeInformation"
    NO_CONTENT = "NoContent"
    RESET_CONTENT = "ResetContent"
    PARTIAL_CONTENT = "PartialContent"
    MULTIPLE_CHOICES = "MultipleChoices"
    AMBIGUOUS = "Ambiguous"
    MOVED_PERMANENTLY = "MovedPermanently"
    MOVED = "Moved"
    FOUND = "Found"
    REDIRECT = "Redirect"
    SEE_OTHER = "SeeOther"
    REDIRECT_METHOD = "RedirectMethod"
    NOT_MODIFIED = "NotModified"
    USE_PROXY = "UseProxy"
    UNUSED = "Unused"
    TEMPORARY_REDIRECT = "TemporaryRedirect"
    REDIRECT_KEEP_VERB = "RedirectKeepVerb"
    BAD_REQUEST = "BadRequest"
    UNAUTHORIZED = "Unauthorized"
    PAYMENT_REQUIRED = "PaymentRequired"
    FORBIDDEN = "Forbidden"
    NOT_FOUND = "NotFound"
    METHOD_NOT_ALLOWED = "MethodNotAllowed"
    NOT_ACCEPTABLE = "NotAcceptable"
    PROXY_AUTHENTICATION_REQUIRED = "ProxyAuthenticationRequired"
    REQUEST_TIMEOUT = "RequestTimeout"
    CONFLICT = "Conflict"
    GONE = "Gone"
    LENGTH_REQUIRED = "LengthRequired"
    PRECONDITION_FAILED = "PreconditionFailed"
    REQUEST_ENTITY_TOO_LARGE = "RequestEntityTooLarge"
    REQUEST_URI_TOO_LONG = "RequestUriTooLong"
    UNSUPPORTED_MEDIA_TYPE = "UnsupportedMediaType"
    REQUESTED_RANGE_NOT_SATISFIABLE = "RequestedRangeNotSatisfiable"
    EXPECTATION_FAILED = "ExpectationFailed"
    UPGRADE_REQUIRED = "UpgradeRequired"
    INTERNAL_SERVER_ERROR = "InternalServerError"
    NOT_IMPLEMENTED = "NotImplemented"
    BAD_GATEWAY = "BadGateway"
    SERVICE_UNAVAILABLE = "ServiceUnavailable"
    GATEWAY_TIMEOUT = "GatewayTimeout"
    HTTP_VERSION_NOT_SUPPORTED = "HttpVersionNotSupported"


@dataclass_json
@dataclass
class APIResponseObject:
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    paging_info: Optional[paginginfo.PagingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PagingInfo' }})
    response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Response' }})
    status_code: Optional[APIResponseObjectStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Success' }})
    
