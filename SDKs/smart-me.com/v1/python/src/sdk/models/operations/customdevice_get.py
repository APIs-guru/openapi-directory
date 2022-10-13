from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CustomDeviceGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    custom_device_to_posts: Optional[List[shared.CustomDeviceToPost]] = field(default=None)
    status_code: int = field(default=None)
    
