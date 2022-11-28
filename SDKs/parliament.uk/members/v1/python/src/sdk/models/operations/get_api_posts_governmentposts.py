from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIPostsGovernmentPostsQueryParams:
    department_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'departmentId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIPostsGovernmentPostsRequest:
    query_params: GetAPIPostsGovernmentPostsQueryParams = field()
    

@dataclass
class GetAPIPostsGovernmentPostsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    government_opposition_post_items: Optional[List[shared.GovernmentOppositionPostItem]] = field(default=None)
    
