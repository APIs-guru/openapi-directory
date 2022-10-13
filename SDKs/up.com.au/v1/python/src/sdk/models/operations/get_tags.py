from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTagsQueryParams:
    page_size_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsRequest:
    query_params: GetTagsQueryParams = field(default=None)
    

@dataclass
class GetTagsResponse:
    content_type: str = field(default=None)
    list_tags_response: Optional[shared.ListTagsResponse] = field(default=None)
    status_code: int = field(default=None)
    
