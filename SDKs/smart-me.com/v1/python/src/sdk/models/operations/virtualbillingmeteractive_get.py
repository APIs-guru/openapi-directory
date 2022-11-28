from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class VirtualBillingMeterActiveGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    devices: Optional[List[shared.Device]] = field(default=None)
    
