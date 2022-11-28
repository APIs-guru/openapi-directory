from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLatestPlatformVersionResponse:
    content_type: str = field()
    status_code: int = field()
    component_version: Optional[shared.ComponentVersion] = field(default=None)
    
