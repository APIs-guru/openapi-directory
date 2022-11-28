from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TagServiceInventoryPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagServiceInventoryRequest:
    path_params: TagServiceInventoryPathParams = field()
    request: List[shared.Tag] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TagServiceInventoryResponse:
    content_type: str = field()
    status_code: int = field()
    tags: Optional[List[shared.Tag]] = field(default=None)
    
