from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SHORT_CODE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class UpdateShortCodePathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateShortCodeUpdateShortCodeRequest:
    is_reserved: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IsReserved' }})
    

@dataclass
class UpdateShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateShortCodeRequest:
    path_params: UpdateShortCodePathParams = field()
    security: UpdateShortCodeSecurity = field()
    request: Optional[UpdateShortCodeUpdateShortCodeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateShortCodeResponse:
    content_type: str = field()
    status_code: int = field()
    proxy_v1_service_short_code: Optional[shared.ProxyV1ServiceShortCode] = field(default=None)
    
