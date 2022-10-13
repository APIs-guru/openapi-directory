from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateDeviceCodeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateDeviceCodeRequest:
    request: shared.CreateDeviceCodeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDeviceCodeSecurity = field(default=None)
    

@dataclass
class CreateDeviceCodeResponse:
    content_type: str = field(default=None)
    create_device_code_response: Optional[shared.CreateDeviceCodeResponse] = field(default=None)
    status_code: int = field(default=None)
    
