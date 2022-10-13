from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MEDIA_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchMediaPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    message_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMediaSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMediaRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMediaPathParams = field(default=None)
    security: FetchMediaSecurity = field(default=None)
    

@dataclass
class FetchMediaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_message_media: Optional[shared.APIV2010AccountMessageMedia] = field(default=None)
    
