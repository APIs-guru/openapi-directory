from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CONFERENCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateConferencePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConferenceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConferenceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConferencePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConferenceSecurity = field(default=None)
    

@dataclass
class UpdateConferenceResponses:
    api_v2010_account_conference: Optional[shared.APIV2010AccountConference] = field(default=None)
    

@dataclass
class UpdateConferenceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateConferenceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
