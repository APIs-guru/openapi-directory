from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_RECORDING_ADD_ON_RESULT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchRecordingAddOnResultPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = field(metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRecordingAddOnResultSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRecordingAddOnResultRequest:
    path_params: FetchRecordingAddOnResultPathParams = field()
    security: FetchRecordingAddOnResultSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRecordingAddOnResultResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_recording_recording_add_on_result: Optional[shared.APIV2010AccountRecordingRecordingAddOnResult] = field(default=None)
    
