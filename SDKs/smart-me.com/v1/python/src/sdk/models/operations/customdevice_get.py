from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CustomDeviceGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    custom_device_to_posts: Optional[List[shared.CustomDeviceToPost]] = field(default=None)
    
