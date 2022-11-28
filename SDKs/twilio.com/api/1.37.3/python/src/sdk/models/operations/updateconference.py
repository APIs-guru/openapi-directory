from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_CONFERENCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateConferencePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConferenceRequest:
    path_params: UpdateConferencePathParams = field()
    security: UpdateConferenceSecurity = field()
    request: Optional[UpdateConferenceUpdateConferenceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateConferenceResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_conference: Optional[shared.APIV2010AccountConference] = field(default=None)
    
