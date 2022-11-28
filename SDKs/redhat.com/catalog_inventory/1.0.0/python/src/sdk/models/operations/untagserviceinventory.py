from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class UntagServiceInventoryPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UntagServiceInventoryRequest:
    path_params: UntagServiceInventoryPathParams = field()
    request: List[shared.Tag] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UntagServiceInventoryResponse:
    content_type: str = field()
    status_code: int = field()
    
