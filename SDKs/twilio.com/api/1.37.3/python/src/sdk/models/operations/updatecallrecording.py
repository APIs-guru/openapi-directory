from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_CALL_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateCallRecordingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCallRecordingUpdateCallRecordingRequest:
    status: shared.CallRecordingEnumStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    pause_behavior: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PauseBehavior' }})
    

@dataclass
class UpdateCallRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCallRecordingRequest:
    path_params: UpdateCallRecordingPathParams = field()
    security: UpdateCallRecordingSecurity = field()
    request: Optional[UpdateCallRecordingUpdateCallRecordingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateCallRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_call_call_recording: Optional[shared.APIV2010AccountCallCallRecording] = field(default=None)
    
