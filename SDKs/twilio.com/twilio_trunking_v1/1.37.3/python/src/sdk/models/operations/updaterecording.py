from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_RECORDING_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class UpdateRecordingPathParams:
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRecordingUpdateRecordingRequest:
    mode: Optional[shared.RecordingEnumRecordingModeEnum] = field(default=None, metadata={'form': { 'field_name': 'Mode' }})
    trim: Optional[shared.RecordingEnumRecordingTrimEnum] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    

@dataclass
class UpdateRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateRecordingRequest:
    path_params: UpdateRecordingPathParams = field()
    security: UpdateRecordingSecurity = field()
    request: Optional[UpdateRecordingUpdateRecordingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    trunking_v1_trunk_recording: Optional[shared.TrunkingV1TrunkRecording] = field(default=None)
    
