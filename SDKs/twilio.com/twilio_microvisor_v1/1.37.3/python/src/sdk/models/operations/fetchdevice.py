from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_DEVICE_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclass
class FetchDevicePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeviceRequest:
    path_params: FetchDevicePathParams = field()
    security: FetchDeviceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    microvisor_v1_device: Optional[shared.MicrovisorV1Device] = field(default=None)
    
