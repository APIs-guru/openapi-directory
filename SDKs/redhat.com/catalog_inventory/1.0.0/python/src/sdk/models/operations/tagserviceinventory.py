from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TagServiceInventoryPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagServiceInventoryRequest:
    path_params: TagServiceInventoryPathParams = field(default=None)
    request: List[shared.Tag] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TagServiceInventoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    
