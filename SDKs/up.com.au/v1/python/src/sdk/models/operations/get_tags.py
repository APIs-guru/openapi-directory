from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagsQueryParams:
    page_size_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsRequest:
    query_params: GetTagsQueryParams = field()
    

@dataclass
class GetTagsResponse:
    content_type: str = field()
    status_code: int = field()
    list_tags_response: Optional[shared.ListTagsResponse] = field(default=None)
    
