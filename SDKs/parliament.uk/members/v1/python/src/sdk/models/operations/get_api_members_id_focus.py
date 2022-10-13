from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDFocusPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDFocusRequest:
    path_params: GetAPIMembersIDFocusPathParams = field(default=None)
    

@dataclass
class GetAPIMembersIDFocusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    member_focus_list_item: Optional[shared.MemberFocusListItem] = field(default=None)
    status_code: int = field(default=None)
    
