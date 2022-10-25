from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_CONFERENCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateConferencePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateConferenceUpdateConferenceRequest:
    announce_method: Optional[UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'AnnounceMethod' }})
    announce_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AnnounceUrl' }})
    status: Optional[shared.ConferenceEnumUpdateStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateConferenceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConferenceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConferencePathParams = field(default=None)
    request: Optional[UpdateConferenceUpdateConferenceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConferenceSecurity = field(default=None)
    

@dataclass
class UpdateConferenceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_conference: Optional[shared.APIV2010AccountConference] = field(default=None)
    
