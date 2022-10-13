from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIPicoLoadmanagementgroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pico_loadmanagement_group_dtos: Optional[List[shared.PicoLoadmanagementGroupDto]] = field(default=None)
    status_code: int = field(default=None)
    
