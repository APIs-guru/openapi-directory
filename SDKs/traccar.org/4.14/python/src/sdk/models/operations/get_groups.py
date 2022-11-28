from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGroupsQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGroupsRequest:
    query_params: GetGroupsQueryParams = field()
    

@dataclass
class GetGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    groups: Optional[List[shared.Group]] = field(default=None)
    
