from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetChangelogsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChangelogsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetChangelogsRequest:
    query_params: GetChangelogsQueryParams = field()
    security: GetChangelogsSecurity = field()
    

@dataclass
class GetChangelogsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
