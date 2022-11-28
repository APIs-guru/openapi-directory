from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIPostsOppositionPostsQueryParams:
    department_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'departmentId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIPostsOppositionPostsRequest:
    query_params: GetAPIPostsOppositionPostsQueryParams = field()
    

@dataclass
class GetAPIPostsOppositionPostsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    government_opposition_post_items: Optional[List[shared.GovernmentOppositionPostItem]] = field(default=None)
    
