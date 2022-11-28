from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIMembersHistoryQueryParams:
    ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersHistoryRequest:
    query_params: GetAPIMembersHistoryQueryParams = field()
    

@dataclass
class GetAPIMembersHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    member_history_items: Optional[List[shared.MemberHistoryItem]] = field(default=None)
    
