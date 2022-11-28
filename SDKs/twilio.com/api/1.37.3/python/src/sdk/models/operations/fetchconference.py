from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONFERENCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchConferencePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConferenceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConferenceRequest:
    path_params: FetchConferencePathParams = field()
    security: FetchConferenceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchConferenceResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_conference: Optional[shared.APIV2010AccountConference] = field(default=None)
    
