from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_SERVICE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class UpdateServicePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceUpdateServiceRequest:
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    chat_instance_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ChatInstanceSid' }})
    default_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'DefaultTtl' }})
    geo_match_level: Optional[shared.ServiceEnumGeoMatchLevelEnum] = field(default=None, metadata={'form': { 'field_name': 'GeoMatchLevel' }})
    intercept_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'InterceptCallbackUrl' }})
    number_selection_behavior: Optional[shared.ServiceEnumNumberSelectionBehaviorEnum] = field(default=None, metadata={'form': { 'field_name': 'NumberSelectionBehavior' }})
    out_of_session_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'OutOfSessionCallbackUrl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

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
    proxy_v1_service: Optional[shared.ProxyV1Service] = field(default=None)
    
