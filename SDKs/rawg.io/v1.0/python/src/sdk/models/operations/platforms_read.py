from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PlatformsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlatformsReadRequest:
    path_params: PlatformsReadPathParams = field()
    

@dataclass
class PlatformsReadResponse:
    content_type: str = field()
    status_code: int = field()
    platform_single: Optional[shared.PlatformSingle] = field(default=None)
    
