from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PicoLoadmanagementGroupGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoLoadmanagementGroupGetRequest:
    path_params: PicoLoadmanagementGroupGetPathParams = field()
    

@dataclass
class PicoLoadmanagementGroupGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    pico_loadmanagement_group_dto: Optional[shared.PicoLoadmanagementGroupDto] = field(default=None)
    
