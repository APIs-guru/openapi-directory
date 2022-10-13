from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_OUTGOING_CALLER_ID_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateOutgoingCallerIDPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOutgoingCallerIDSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateOutgoingCallerIDRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateOutgoingCallerIDPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateOutgoingCallerIDSecurity = field(default=None)
    

@dataclass
class UpdateOutgoingCallerIDResponses:
    api_v2010_account_outgoing_caller_id: Optional[shared.APIV2010AccountOutgoingCallerID] = field(default=None)
    

@dataclass
class UpdateOutgoingCallerIDResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateOutgoingCallerIDResponses]] = field(default=None)
    status_code: int = field(default=None)
    
