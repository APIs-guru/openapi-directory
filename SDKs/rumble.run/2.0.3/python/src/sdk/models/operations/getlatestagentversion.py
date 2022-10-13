from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLatestAgentVersionResponse:
    component_version: Optional[shared.ComponentVersion] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
