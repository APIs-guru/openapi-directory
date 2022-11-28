from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_CONFERENCE_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateConferenceRecordingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConferenceRecordingUpdateConferenceRecordingRequest:
    status: shared.ConferenceRecordingEnumStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    pause_behavior: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PauseBehavior' }})
    

@dataclass
class UpdateConferenceRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConferenceRecordingRequest:
    path_params: UpdateConferenceRecordingPathParams = field()
    security: UpdateConferenceRecordingSecurity = field()
    request: Optional[UpdateConferenceRecordingUpdateConferenceRecordingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateConferenceRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_conference_conference_recording: Optional[shared.APIV2010AccountConferenceConferenceRecording] = field(default=None)
    
