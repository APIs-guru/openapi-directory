from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostDevicesRequest:
    request: shared.Device = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDevicesResponse:
    content_type: str = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    status_code: int = field(default=None)
    
