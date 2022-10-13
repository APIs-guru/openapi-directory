from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PicoLoadmanagementGroupGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoLoadmanagementGroupGetRequest:
    path_params: PicoLoadmanagementGroupGetPathParams = field(default=None)
    

@dataclass
class PicoLoadmanagementGroupGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pico_loadmanagement_group_dto: Optional[shared.PicoLoadmanagementGroupDto] = field(default=None)
    status_code: int = field(default=None)
    
