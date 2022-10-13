from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_SERVICE_SERVERS = [
	"https://messaging.twilio.com",
]

class CreateServiceRequestBodyFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateServiceRequestBodyInboundMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateServiceRequestBodyCreateServiceRequest:
    area_code_geomatch: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AreaCodeGeomatch' }})
    fallback_method: Optional[CreateServiceRequestBodyFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'FallbackMethod' }})
    fallback_to_long_code: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'FallbackToLongCode' }})
    fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FallbackUrl' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    inbound_method: Optional[CreateServiceRequestBodyInboundMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'InboundMethod' }})
    inbound_request_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'InboundRequestUrl' }})
    mms_converter: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'MmsConverter' }})
    scan_message_content: Optional[shared.ServiceEnumScanMessageContentEnum] = field(default=None, metadata={'form': { 'field_name': 'ScanMessageContent' }})
    smart_encoding: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SmartEncoding' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    sticky_sender: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'StickySender' }})
    synchronous_validation: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SynchronousValidation' }})
    use_inbound_webhook_on_number: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'UseInboundWebhookOnNumber' }})
    usecase: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Usecase' }})
    validity_period: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ValidityPeriod' }})
    

@dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateServiceRequestBodyCreateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceSecurity = field(default=None)
    

@dataclass
class CreateServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    messaging_v1_service: Optional[shared.MessagingV1Service] = field(default=None)
    
