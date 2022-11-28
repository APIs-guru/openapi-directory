from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_RECORDING_ADD_ON_RESULT_PAYLOAD_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchRecordingAddOnResultPayloadPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    add_on_result_sid: str = field(metadata={'path_param': { 'field_name': 'AddOnResultSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = field(metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRecordingAddOnResultPayloadSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRecordingAddOnResultPayloadRequest:
    path_params: FetchRecordingAddOnResultPayloadPathParams = field()
    security: FetchRecordingAddOnResultPayloadSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRecordingAddOnResultPayloadResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_recording_recording_add_on_result_recording_add_on_result_payload: Optional[shared.APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload] = field(default=None)
    
