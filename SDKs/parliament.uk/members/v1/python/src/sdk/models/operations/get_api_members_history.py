from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIMembersHistoryQueryParams:
    ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersHistoryRequest:
    query_params: GetAPIMembersHistoryQueryParams = field(default=None)
    

@dataclass
class GetAPIMembersHistoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    member_history_items: Optional[List[shared.MemberHistoryItem]] = field(default=None)
    status_code: int = field(default=None)
    
