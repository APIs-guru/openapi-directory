from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDFocusPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDFocusRequest:
    path_params: GetAPIMembersIDFocusPathParams = field()
    

@dataclass
class GetAPIMembersIDFocusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    member_focus_list_item: Optional[shared.MemberFocusListItem] = field(default=None)
    
