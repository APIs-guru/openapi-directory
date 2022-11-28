from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_SIPREC_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSiprecPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSiprecUpdateSiprecRequest:
    status: shared.SiprecEnumUpdateStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateSiprecSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSiprecRequest:
    path_params: UpdateSiprecPathParams = field()
    security: UpdateSiprecSecurity = field()
    request: Optional[UpdateSiprecUpdateSiprecRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSiprecResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_siprec: Optional[shared.APIV2010AccountCallSiprec] = field(default=None)
    
