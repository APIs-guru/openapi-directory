from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDeviceCodePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCodeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDeviceCodeRequest:
    path_params: GetDeviceCodePathParams = field(default=None)
    security: GetDeviceCodeSecurity = field(default=None)
    

@dataclass
class GetDeviceCodeResponse:
    content_type: str = field(default=None)
    get_device_code_response: Optional[shared.GetDeviceCodeResponse] = field(default=None)
    status_code: int = field(default=None)
    
