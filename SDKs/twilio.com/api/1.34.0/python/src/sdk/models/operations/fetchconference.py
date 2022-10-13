from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CONFERENCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchConferencePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConferenceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConferenceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchConferencePathParams = field(default=None)
    security: FetchConferenceSecurity = field(default=None)
    

@dataclass
class FetchConferenceResponses:
    api_v2010_account_conference: Optional[shared.APIV2010AccountConference] = field(default=None)
    

@dataclass
class FetchConferenceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchConferenceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
