from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_SERVICE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class UpdateServicePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateServiceUpdateServiceRequestFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateServiceUpdateServiceRequestInboundMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateServiceUpdateServiceRequest:
    area_code_geomatch: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AreaCodeGeomatch' }})
    fallback_method: Optional[UpdateServiceUpdateServiceRequestFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'FallbackMethod' }})
    fallback_to_long_code: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'FallbackToLongCode' }})
    fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FallbackUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    inbound_method: Optional[UpdateServiceUpdateServiceRequestInboundMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'InboundMethod' }})
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
class UpdateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceRequest:
    path_params: UpdateServicePathParams = field()
    security: UpdateServiceSecurity = field()
    request: Optional[UpdateServiceUpdateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateServiceResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_service: Optional[shared.MessagingV1Service] = field(default=None)
    
