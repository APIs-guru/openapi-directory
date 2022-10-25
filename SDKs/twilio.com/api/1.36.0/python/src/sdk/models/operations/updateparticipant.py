from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateParticipantPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    
class UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateParticipantUpdateParticipantRequestHoldMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateParticipantUpdateParticipantRequestWaitMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateParticipantUpdateParticipantRequest:
    announce_method: Optional[UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'AnnounceMethod' }})
    announce_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AnnounceUrl' }})
    beep_on_exit: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'BeepOnExit' }})
    call_sid_to_coach: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallSidToCoach' }})
    coaching: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Coaching' }})
    end_conference_on_exit: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EndConferenceOnExit' }})
    hold: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Hold' }})
    hold_method: Optional[UpdateParticipantUpdateParticipantRequestHoldMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'HoldMethod' }})
    hold_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'HoldUrl' }})
    muted: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Muted' }})
    wait_method: Optional[UpdateParticipantUpdateParticipantRequestWaitMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'WaitMethod' }})
    wait_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WaitUrl' }})
    

@dataclass
class UpdateParticipantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateParticipantRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateParticipantPathParams = field(default=None)
    request: Optional[UpdateParticipantUpdateParticipantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateParticipantSecurity = field(default=None)
    

@dataclass
class UpdateParticipantResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_conference_participant: Optional[shared.APIV2010AccountConferenceParticipant] = field(default=None)
    
