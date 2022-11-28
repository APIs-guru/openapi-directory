from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutGroupsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGroupsIDRequest:
    path_params: PutGroupsIDPathParams = field()
    request: shared.Group = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    
