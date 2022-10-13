from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateEnergyCostPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnergyCostRequest:
    path_params: UpdateEnergyCostPathParams = field(default=None)
    request: Optional[shared.GroupConfiguration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEnergyCostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
