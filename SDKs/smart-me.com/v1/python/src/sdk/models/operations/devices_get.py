from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DevicesGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    devices: Optional[List[shared.Device]] = field(default=None)
    status_code: int = field(default=None)
    
