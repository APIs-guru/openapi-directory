from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCurrentUserGroupsQueryParams:
    membership: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'membership', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCurrentUserGroupsRequest:
    query_params: GetCurrentUserGroupsQueryParams = field(default=None)
    

@dataclass
class GetCurrentUserGroupsResponse:
    content_type: str = field(default=None)
    groups: Optional[List[shared.Group]] = field(default=None)
    status_code: int = field(default=None)
    
