from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PlatformsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlatformsReadRequest:
    path_params: PlatformsReadPathParams = field(default=None)
    

@dataclass
class PlatformsReadResponse:
    content_type: str = field(default=None)
    platform_single: Optional[shared.PlatformSingle] = field(default=None)
    status_code: int = field(default=None)
    
