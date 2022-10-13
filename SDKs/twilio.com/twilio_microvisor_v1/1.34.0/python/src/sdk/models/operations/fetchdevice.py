from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DEVICE_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclass
class FetchDevicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDevicePathParams = field(default=None)
    security: FetchDeviceSecurity = field(default=None)
    

@dataclass
class FetchDeviceResponses:
    microvisor_v1_device: Optional[shared.MicrovisorV1Device] = field(default=None)
    

@dataclass
class FetchDeviceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchDeviceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
