from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchRecordingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRecordingQueryParams:
    include_soft_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IncludeSoftDeleted', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRecordingRequest:
    path_params: FetchRecordingPathParams = field()
    query_params: FetchRecordingQueryParams = field()
    security: FetchRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_recording: Optional[shared.APIV2010AccountRecording] = field(default=None)
    
