from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDStaffPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDStaffRequest:
    path_params: GetAPIMembersIDStaffPathParams = field(default=None)
    

@dataclass
class GetAPIMembersIDStaffResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    staff_list_item: Optional[shared.StaffListItem] = field(default=None)
    status_code: int = field(default=None)
    
