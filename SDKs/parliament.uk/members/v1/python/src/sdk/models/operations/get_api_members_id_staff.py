from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDStaffPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDStaffRequest:
    path_params: GetAPIMembersIDStaffPathParams = field()
    

@dataclass
class GetAPIMembersIDStaffResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    staff_list_item: Optional[shared.StaffListItem] = field(default=None)
    
