from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIPicoLoadmanagementgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    pico_loadmanagement_group_dtos: Optional[List[shared.PicoLoadmanagementGroupDto]] = field(default=None)
    
