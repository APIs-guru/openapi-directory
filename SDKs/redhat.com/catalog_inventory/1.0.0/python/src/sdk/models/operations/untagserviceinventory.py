from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class UntagServiceInventoryPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UntagServiceInventoryRequest:
    path_params: UntagServiceInventoryPathParams = field(default=None)
    request: List[shared.Tag] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UntagServiceInventoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
