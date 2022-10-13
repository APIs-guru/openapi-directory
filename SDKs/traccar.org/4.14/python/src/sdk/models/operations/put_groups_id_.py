from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutGroupsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGroupsIDRequest:
    path_params: PutGroupsIDPathParams = field(default=None)
    request: shared.Group = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGroupsIDResponse:
    content_type: str = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
