from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserGroupNoticesQueryParams:
    group_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserGroupNoticesRequest:
    query_params: GetUserGroupNoticesQueryParams = field(default=None)
    

@dataclass
class GetUserGroupNoticesResponse:
    content_type: str = field(default=None)
    group_notices: Optional[List[shared.GroupNotice]] = field(default=None)
    status_code: int = field(default=None)
    
